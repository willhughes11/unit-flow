import { badRequest, notFound, ok, parseJson } from "@/lib/api/http";
import { db } from "@/lib/api/mock-db";

type PatchPropertyBody = {
  name?: string;
  address1?: string;
  city?: string;
  state?: string;
  zip?: string;
};

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = db.properties.find((item) => item.id === id);

  if (!property) {
    return notFound("Property not found.");
  }

  return ok(property);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = db.properties.find((item) => item.id === id);

  if (!property) {
    return notFound("Property not found.");
  }

  const body = await parseJson<PatchPropertyBody>(request);
  if (!body) {
    return badRequest("Invalid JSON body.");
  }

  if (body.name !== undefined) property.name = body.name;
  if (body.address1 !== undefined) property.address1 = body.address1;
  if (body.city !== undefined) property.city = body.city;
  if (body.state !== undefined) property.state = body.state;
  if (body.zip !== undefined) property.zip = body.zip;

  return ok(property);
}
