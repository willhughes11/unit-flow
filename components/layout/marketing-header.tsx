import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import { marketingNav } from "@/lib/navigation";

export function MarketingHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
          UnitFlow
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {marketingNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900">
              {item.label}
            </Link>
          ))}
          <Show when="signed-out">
            <Link href="/sign-in" className="text-slate-600 hover:text-slate-900">
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Start free
            </Link>
          </Show>
          <Show when="signed-in">
            <Link href="/dashboard" className="text-slate-600 hover:text-slate-900">
              Dashboard
            </Link>
            <UserButton />
          </Show>
        </nav>
      </div>
    </header>
  );
}
