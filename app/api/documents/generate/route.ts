import { badRequest, ok, parseJson } from "@/lib/api/http";
import { db, nowIso } from "@/lib/api/mock-db";

type Body = {
  title?: string;
  type?: string;
  ticketId?: string;
  unitId?: string;
};

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.title || !body.type) {
    return badRequest("title and type are required.");
  }

  const doc = {
    id: crypto.randomUUID(),
    title: body.title,
    type: body.type,
    ticketId: body.ticketId,
    unitId: body.unitId,
    createdAt: nowIso(),
  };

  db.documents.unshift(doc);

  return ok(doc, { status: 201 });
}
