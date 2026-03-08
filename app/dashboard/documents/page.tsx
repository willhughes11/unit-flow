import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function DocumentsPage() {
  return (
    <>
      <PageHeader title="Documents" description="Generated notices and communication-ready files." />
      <PlaceholderPanel
        title="Recent Documents"
        items={[
          "Notice of entry - Unit 2A",
          "Appliance replacement notice - Unit 1C",
          "Late payment reminder - Unit 5B",
        ]}
      />
    </>
  );
}
