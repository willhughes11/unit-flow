-- UnitFlow V1 schema draft (PostgreSQL / Supabase)
-- Notes:
-- 1) Uses UUID primary keys and timestamps with timezone.
-- 2) Assumes auth.users exists (Supabase Auth).
-- 3) Add RLS policies after table creation.

create extension if not exists pgcrypto;

-- Enums
create type user_role as enum ('admin', 'manager', 'staff_read_only');
create type ticket_priority as enum ('low', 'normal', 'high', 'urgent');
create type ticket_status as enum (
  'new',
  'waiting_on_manager',
  'waiting_on_tenant',
  'waiting_on_vendor',
  'scheduled',
  'in_progress',
  'completed',
  'closed'
);
create type ticket_category as enum (
  'maintenance_general',
  'plumbing',
  'electrical',
  'hvac',
  'appliance',
  'pest',
  'lock_access',
  'rent_payment',
  'lease_admin',
  'occupancy',
  'safety',
  'other'
);
create type reminder_status as enum ('pending', 'sent', 'dismissed', 'failed');
create type reminder_type as enum (
  'vendor_follow_up',
  'tenant_follow_up',
  'appointment_reminder',
  'document_reminder',
  'rent_reminder'
);
create type message_direction as enum ('outbound', 'inbound');
create type message_channel as enum ('email', 'sms', 'note');

-- Core org + users
create table organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  plan_key text not null default 'starter',
  stripe_customer_id text unique,
  created_at timestamptz not null default now()
);

create table organization_users (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  auth_user_id uuid not null references auth.users(id) on delete cascade,
  role user_role not null default 'manager',
  created_at timestamptz not null default now(),
  unique (organization_id, auth_user_id)
);

-- Portfolio
create table properties (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  name text not null,
  address_1 text not null,
  address_2 text,
  city text not null,
  state text not null,
  zip text not null,
  notes text,
  created_at timestamptz not null default now()
);
create index idx_properties_org on properties(organization_id);

create table units (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  property_id uuid not null references properties(id) on delete cascade,
  label text not null,
  status text not null default 'occupied',
  bedrooms numeric(3,1),
  bathrooms numeric(3,1),
  created_at timestamptz not null default now(),
  unique (property_id, label)
);
create index idx_units_org on units(organization_id);
create index idx_units_property on units(property_id);

create table tenants (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  unit_id uuid not null references units(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  email text,
  phone text,
  lease_start date,
  lease_end date,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create index idx_tenants_org on tenants(organization_id);
create index idx_tenants_unit on tenants(unit_id);

create table vendors (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  company_name text not null,
  contact_name text,
  email text,
  phone text,
  trade_type text,
  notes text,
  created_at timestamptz not null default now()
);
create index idx_vendors_org on vendors(organization_id);

-- Tickets + activity
create table tickets (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  property_id uuid not null references properties(id) on delete restrict,
  unit_id uuid not null references units(id) on delete restrict,
  tenant_id uuid references tenants(id) on delete set null,
  vendor_id uuid references vendors(id) on delete set null,
  source text not null default 'manual',
  title text not null,
  description text not null,
  category ticket_category not null default 'maintenance_general',
  priority ticket_priority not null default 'normal',
  status ticket_status not null default 'new',
  ai_summary text,
  suggested_next_step text,
  created_by_auth_user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  closed_at timestamptz
);
create index idx_tickets_org on tickets(organization_id);
create index idx_tickets_unit on tickets(unit_id);
create index idx_tickets_status on tickets(status);
create index idx_tickets_priority on tickets(priority);

create table ticket_messages (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references tickets(id) on delete cascade,
  direction message_direction not null,
  channel message_channel not null,
  recipient text,
  subject text,
  body text not null,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
create index idx_ticket_messages_ticket on ticket_messages(ticket_id, created_at desc);

create table ticket_events (
  id uuid primary key default gen_random_uuid(),
  ticket_id uuid not null references tickets(id) on delete cascade,
  event_type text not null,
  actor_type text not null,
  actor_id uuid,
  metadata_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index idx_ticket_events_ticket on ticket_events(ticket_id, created_at desc);

-- Intake + reminders
create table issue_intake_submissions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  property_id uuid references properties(id) on delete set null,
  unit_id uuid references units(id) on delete set null,
  tenant_name text,
  tenant_phone text,
  tenant_email text,
  description text not null,
  urgency_selected text,
  photo_paths_json jsonb not null default '[]'::jsonb,
  created_ticket_id uuid references tickets(id) on delete set null,
  created_at timestamptz not null default now()
);
create index idx_intake_org on issue_intake_submissions(organization_id);

create table reminders (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  ticket_id uuid references tickets(id) on delete cascade,
  unit_id uuid references units(id) on delete set null,
  reminder_type reminder_type not null,
  due_at timestamptz not null,
  status reminder_status not null default 'pending',
  target_channel message_channel not null default 'email',
  target_recipient text not null,
  template_key text,
  payload_json jsonb not null default '{}'::jsonb,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
create index idx_reminders_due on reminders(organization_id, status, due_at);

-- Templates + generated docs
create table document_templates (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references organizations(id) on delete cascade,
  type text not null,
  name text not null,
  channel message_channel not null default 'email',
  subject_template text,
  body_template text not null,
  is_system boolean not null default false,
  created_at timestamptz not null default now()
);
create index idx_document_templates_org on document_templates(organization_id);

create table generated_documents (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references organizations(id) on delete cascade,
  property_id uuid references properties(id) on delete set null,
  unit_id uuid references units(id) on delete set null,
  ticket_id uuid references tickets(id) on delete set null,
  template_id uuid references document_templates(id) on delete set null,
  doc_type text not null,
  title text not null,
  content_html text not null,
  pdf_storage_path text,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);
create index idx_generated_documents_org on generated_documents(organization_id, created_at desc);

-- Billing
create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null unique references organizations(id) on delete cascade,
  stripe_subscription_id text unique,
  status text not null default 'inactive',
  plan_key text not null default 'starter',
  units_limit integer not null default 20,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Utility trigger for updated_at
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_tickets_updated_at
before update on tickets
for each row execute function set_updated_at();

create trigger trg_subscriptions_updated_at
before update on subscriptions
for each row execute function set_updated_at();

