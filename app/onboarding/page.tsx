export default function OnboardingPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold text-slate-900">Onboarding</h1>
        <p className="mt-2 text-sm text-slate-600">Set up your first property, unit, and workflow defaults.</p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-700">
          <li>Organization profile</li>
          <li>First property and unit</li>
          <li>Tenant and vendor contacts</li>
          <li>Template defaults</li>
        </ol>
      </section>
    </main>
  );
}
