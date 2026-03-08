import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <>
      <PageHeader title={`Property ${id}`} description="Property profile, units, and open issues." />
      <div className="grid gap-4 md:grid-cols-2">
        <PlaceholderPanel title="Units" items={["1A", "1B", "2A", "2B"]} />
        <PlaceholderPanel title="Open Tickets" items={["2A: Leak", "1B: Appliance", "2B: Access request"]} />
      </div>
    </>
  );
}
