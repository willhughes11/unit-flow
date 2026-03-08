import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function TicketsPage() {
  return (
    <>
      <PageHeader title="Tickets" description="Kanban workflow for issue triage, scheduling, and closeout." />
      <div className="grid gap-4 lg:grid-cols-3">
        <PlaceholderPanel title="New" items={["Unit 2A: leak", "Unit 3C: pest"]} />
        <PlaceholderPanel title="Waiting on Vendor" items={["Unit 5C: HVAC follow-up", "Unit 1D: lock replacement"]} />
        <PlaceholderPanel title="In Progress" items={["Unit 1A: appliance replacement"]} />
      </div>
    </>
  );
}
