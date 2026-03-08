import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function TemplatesPage() {
  return (
    <>
      <PageHeader title="Templates" description="Message and notice templates with merge variables." />
      <PlaceholderPanel
        title="Default Templates"
        items={[
          "Tenant request received",
          "Need access window",
          "Vendor assigned",
          "Notice of entry",
          "Appliance replacement scheduling",
        ]}
      />
    </>
  );
}
