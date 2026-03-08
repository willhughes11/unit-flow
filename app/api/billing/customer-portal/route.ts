import { ok } from "@/lib/api/http";

export async function POST() {
  return ok({
    portalUrl: "https://example.com/stripe-customer-portal-placeholder",
  });
}
