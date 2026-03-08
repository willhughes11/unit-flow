import Link from "next/link";

export default function SignInPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Sign in</h1>
      <p className="mt-2 text-sm text-slate-600">Access your UnitFlow workspace.</p>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email" type="email" />
        <input
          className="w-full rounded-md border border-slate-300 px-3 py-2"
          placeholder="Password"
          type="password"
        />
        <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white" type="submit">
          Continue
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-600">
        No account yet? <Link href="/sign-up" className="text-slate-900 underline">Create one</Link>
      </p>
    </div>
  );
}
