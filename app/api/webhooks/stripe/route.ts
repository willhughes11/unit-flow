import { ok } from "@/lib/api/http";

export async function POST() {
  return ok({ received: true });
}
