import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function PropertiesPage() {
  return (
    <>
      <PageHeader title="Properties" description="Manage your portfolio and monitor open work by property." />
      <PlaceholderPanel
        title="Property List"
        items={[
          "Maple Court - 12 units - 4 open tickets",
          "Riverside Flats - 28 units - 7 open tickets",
          "Elm Duplex - 2 units - 1 open ticket",
        ]}
      />
    </>
  );
}
