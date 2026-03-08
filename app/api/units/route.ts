import { badRequest, ok, parseJson } from "@/lib/api/http";
import { db, nowIso, type Unit } from "@/lib/api/mock-db";

type CreateUnitBody = {
  propertyId?: string;
  label?: string;
  status?: string;
};

export async function GET() {
  return ok({ items: db.units });
}

export async function POST(request: Request) {
  const body = await parseJson<CreateUnitBody>(request);
  if (!body) {
    return badRequest("Invalid JSON body.");
  }

  if (!body.propertyId || !body.label) {
    return badRequest("propertyId and label are required.");
  }

  const property = db.properties.find((item) => item.id === body.propertyId);
  if (!property) {
    return badRequest("propertyId must reference an existing property.");
  }

  const unit: Unit = {
    id: crypto.randomUUID(),
    propertyId: body.propertyId,
    label: body.label,
    status: body.status ?? "occupied",
    createdAt: nowIso(),
  };

  db.units.unshift(unit);

  return ok(unit, { status: 201 });
}
