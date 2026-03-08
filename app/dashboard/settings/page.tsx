import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" description="Organization profile, team permissions, and defaults." />
      <PlaceholderPanel
        title="Settings Areas"
        items={[
          "Organization profile",
          "Team members and roles",
          "Notification defaults",
          "Communication preferences",
        ]}
      />
    </>
  );
}
