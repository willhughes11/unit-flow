import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function UnitsPage() {
  return (
    <>
      <PageHeader title="Units" description="View unit health, active tenants, and open issues." />
      <PlaceholderPanel
        title="Units Overview"
        items={[
          "Maple Court 2A - 1 open issue",
          "Maple Court 1B - no open issues",
          "Riverside 5C - 2 open issues",
        ]}
      />
    </>
  );
}
