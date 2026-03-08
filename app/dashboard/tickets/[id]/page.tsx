import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <PageHeader title={`Ticket ${id}`} description="Status, communications, reminders, and event history." />
      <div className="grid gap-4 md:grid-cols-2">
        <PlaceholderPanel
          title="Actions"
          items={[
            "Draft tenant reply",
            "Draft vendor message",
            "Assign vendor",
            "Generate notice",
            "Schedule reminder",
          ]}
        />
        <PlaceholderPanel
          title="Timeline"
          items={[
            "Ticket created",
            "AI categorized as plumbing (high)",
            "Tenant acknowledgment sent",
            "Reminder due in 12h",
          ]}
        />
      </div>
    </>
  );
}
