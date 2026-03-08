import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function ContactsPage() {
  return (
    <>
      <PageHeader title="Contacts" description="Tenant and vendor records used by workflow automations." />
      <div className="grid gap-4 md:grid-cols-2">
        <PlaceholderPanel title="Tenants" items={["Jordan Lee", "Casey Smith", "Avery Johnson"]} />
        <PlaceholderPanel title="Vendors" items={["Rapid Plumbing", "Summit HVAC", "Northside Electric"]} />
      </div>
    </>
  );
}
