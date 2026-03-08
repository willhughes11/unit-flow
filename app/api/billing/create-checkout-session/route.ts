import { badRequest, ok, parseJson } from "@/lib/api/http";

type Body = { planKey?: string };

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.planKey) {
    return badRequest("planKey is required.");
  }

  return ok({
    checkoutUrl: "https://example.com/stripe-checkout-placeholder",
    planKey: body.planKey,
  });
}
