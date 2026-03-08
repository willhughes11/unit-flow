import { ok } from "@/lib/api/http";
import { db } from "@/lib/api/mock-db";

export async function GET() {
  return ok({ items: db.documents });
}
