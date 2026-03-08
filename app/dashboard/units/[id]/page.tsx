import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default async function UnitDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <PageHeader title={`Unit ${id}`} description="Ticket history, notices, and timeline for this unit." />
      <div className="grid gap-4 md:grid-cols-2">
        <PlaceholderPanel title="Active Tickets" items={["Kitchen sink leak", "HVAC inspection follow-up"]} />
        <PlaceholderPanel
          title="Timeline"
          items={[
            "Notice of entry generated",
            "Vendor contacted",
            "Tenant confirmed access window",
          ]}
        />
      </div>
    </>
  );
}
