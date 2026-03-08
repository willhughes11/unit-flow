import { badRequest, ok, parseJson } from "@/lib/api/http";
import { db, nowIso } from "@/lib/api/mock-db";

type Body = {
  name?: string;
  type?: "tenant_message" | "vendor_message" | "notice";
  body?: string;
};

export async function GET() {
  return ok({ items: db.templates });
}

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.name || !body.type || !body.body) {
    return badRequest("name, type, and body are required.");
  }

  const template = {
    id: crypto.randomUUID(),
    name: body.name,
    type: body.type,
    body: body.body,
    createdAt: nowIso(),
  };

  db.templates.unshift(template);

  return ok(template, { status: 201 });
}
