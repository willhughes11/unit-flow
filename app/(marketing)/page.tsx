import Link from "next/link";

const valueBullets = [
  "Turn tenant issues into tracked tickets",
  "Generate notices and common documents quickly",
  "Automate follow-ups to tenants and vendors",
  "Keep a full timeline for every unit",
];

export default function MarketingHomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
        <p className="text-sm font-medium uppercase tracking-wide text-teal-700">Landlord Ops Assistant</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Stop managing rental operations through random texts and memory.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
          UnitFlow helps small landlords and property managers track maintenance, generate notices, and automate
          follow-up in one workflow.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/sign-up"
            className="rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Start free
          </Link>
          <Link
            href="/pricing"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
          >
            See pricing
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2">
        {valueBullets.map((bullet) => (
          <article key={bullet} className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-700">
            {bullet}
          </article>
        ))}
      </section>
    </main>
  );
}
