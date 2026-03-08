import { badRequest, ok, parseJson } from "@/lib/api/http";
import { db, nowIso, type Property } from "@/lib/api/mock-db";

type CreatePropertyBody = {
  name?: string;
  address1?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export async function GET() {
  return ok({ items: db.properties });
}

export async function POST(request: Request) {
  const body = await parseJson<CreatePropertyBody>(request);
  if (!body) {
    return badRequest("Invalid JSON body.");
  }

  if (!body.name || !body.address1 || !body.city || !body.state || !body.zip) {
    return badRequest("name, address1, city, state, and zip are required.");
  }

  const property: Property = {
    id: crypto.randomUUID(),
    name: body.name,
    address1: body.address1,
    city: body.city,
    state: body.state,
    zip: body.zip,
    createdAt: nowIso(),
  };

  db.properties.unshift(property);

  return ok(property, { status: 201 });
}
