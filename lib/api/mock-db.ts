export type Property = {
  id: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  zip: string;
  createdAt: string;
};

export type Unit = {
  id: string;
  propertyId: string;
  label: string;
  status: string;
  createdAt: string;
};

export type Ticket = {
  id: string;
  propertyId: string;
  unitId: string;
  title: string;
  description: string;
  status: string;
  category: string;
  priority: string;
  createdAt: string;
  updatedAt: string;
};

export type Reminder = {
  id: string;
  ticketId?: string;
  dueAt: string;
  status: "pending" | "sent" | "dismissed";
  channel: "email" | "sms";
  recipient: string;
  createdAt: string;
};

export type Template = {
  id: string;
  name: string;
  type: "tenant_message" | "vendor_message" | "notice";
  body: string;
  createdAt: string;
};

export type DocumentItem = {
  id: string;
  title: string;
  type: string;
  ticketId?: string;
  unitId?: string;
  createdAt: string;
};

type MockDb = {
  properties: Property[];
  units: Unit[];
  tickets: Ticket[];
  reminders: Reminder[];
  templates: Template[];
  documents: DocumentItem[];
};

const g = globalThis as typeof globalThis & { __unitFlowMockDb?: MockDb };

function seedDb(): MockDb {
  const propertyId = crypto.randomUUID();
  const unitId = crypto.randomUUID();
  const now = new Date().toISOString();

  return {
    properties: [
      {
        id: propertyId,
        name: "Maple Court",
        address1: "101 Main St",
        city: "Columbus",
        state: "OH",
        zip: "43215",
        createdAt: now,
      },
    ],
    units: [
      {
        id: unitId,
        propertyId,
        label: "2A",
        status: "occupied",
        createdAt: now,
      },
    ],
    tickets: [
      {
        id: crypto.randomUUID(),
        propertyId,
        unitId,
        title: "Kitchen sink leak",
        description: "Tenant reported active leak under sink.",
        status: "new",
        category: "plumbing",
        priority: "high",
        createdAt: now,
        updatedAt: now,
      },
    ],
    reminders: [],
    templates: [
      {
        id: crypto.randomUUID(),
        name: "Tenant request received",
        type: "tenant_message",
        body: "We received your request and will follow up shortly.",
        createdAt: now,
      },
    ],
    documents: [],
  };
}

export const db = g.__unitFlowMockDb ?? (g.__unitFlowMockDb = seedDb());

export function nowIso() {
  return new Date().toISOString();
}
