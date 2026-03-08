import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Operations Dashboard"
        description="Track open tickets, follow-ups due, and unit activity in one place."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <PlaceholderPanel
          title="Priority Queue"
          items={["8 open tickets", "3 overdue follow-ups", "2 waiting on vendor"]}
        />
        <PlaceholderPanel
          title="Recent Activity"
          items={[
            "Unit 2A: plumbing issue moved to scheduled",
            "Unit 5C: notice of entry sent",
            "Unit 1B: ticket closed",
          ]}
        />
      </div>
    </>
  );
}
