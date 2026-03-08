import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderPanel } from "@/components/ui/placeholder-panel";

export default function BillingPage() {
  return (
    <>
      <PageHeader title="Billing" description="Subscription, invoices, and plan limits by unit count." />
      <PlaceholderPanel
        title="Current Plan"
        items={[
          "Plan: Growth",
          "Units: 42 / 75",
          "Trial ends in 9 days",
          "Next invoice: April 1",
        ]}
      />
    </>
  );
}
