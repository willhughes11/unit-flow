import { badRequest, notFound, ok, parseJson } from "@/lib/api/http";
import { db } from "@/lib/api/mock-db";

type Body = {
  name?: string;
  body?: string;
};

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const template = db.templates.find((item) => item.id === id);

  if (!template) {
    return notFound("Template not found.");
  }

  const body = await parseJson<Body>(request);
  if (!body) {
    return badRequest("Invalid JSON body.");
  }

  if (body.name !== undefined) template.name = body.name;
  if (body.body !== undefined) template.body = body.body;

  return ok(template);
}
