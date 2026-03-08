const plans = [
  {
    name: "Starter",
    price: "$49/mo",
    units: "Up to 20 units",
    points: ["Ticket workflow", "Default templates", "Email notifications"],
  },
  {
    name: "Growth",
    price: "$99/mo",
    units: "Up to 75 units",
    points: ["Everything in Starter", "AI drafting", "Reminder automation"],
  },
  {
    name: "Pro",
    price: "$199/mo",
    units: "Up to 200 units",
    points: ["Everything in Growth", "Priority support", "Team access controls"],
  },
];

export default function PricingPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">Simple pricing by unit count</h1>
        <p className="mt-3 text-slate-600">14-day trial. Optional onboarding setup for faster launch.</p>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <article key={plan.name} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-900">{plan.name}</h2>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{plan.price}</p>
            <p className="mt-1 text-sm text-slate-600">{plan.units}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
