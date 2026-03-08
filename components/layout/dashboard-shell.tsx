import Link from "next/link";
import { dashboardNav } from "@/lib/navigation";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
        <aside className="rounded-xl border border-slate-200 bg-white p-4">
          <Link href="/dashboard" className="mb-4 block text-lg font-semibold text-slate-900">
            UnitFlow
          </Link>
          <nav className="space-y-1">
            {dashboardNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="space-y-6">{children}</main>
      </div>
    </div>
  );
}
