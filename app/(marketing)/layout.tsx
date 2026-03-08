import { MarketingHeader } from "@/components/layout/marketing-header";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <MarketingHeader />
      {children}
    </div>
  );
}
