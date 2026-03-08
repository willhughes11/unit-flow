import { notFound, ok } from "@/lib/api/http";
import { db } from "@/lib/api/mock-db";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doc = db.documents.find((item) => item.id === id);

  if (!doc) {
    return notFound("Document not found.");
  }

  return ok(doc);
}
