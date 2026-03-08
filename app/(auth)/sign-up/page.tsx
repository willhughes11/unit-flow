import Link from "next/link";

export default function SignUpPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Start free trial</h1>
      <p className="mt-2 text-sm text-slate-600">Create your organization and start with your first property.</p>
      <form className="mt-6 space-y-4">
        <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Full name" />
        <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Work email" type="email" />
        <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Organization name" />
        <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white" type="submit">
          Create account
        </button>
      </form>
      <p className="mt-4 text-sm text-slate-600">
        Already have an account? <Link href="/sign-in" className="text-slate-900 underline">Sign in</Link>
      </p>
    </div>
  );
}
