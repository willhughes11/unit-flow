import { badRequest, notFound, ok, parseJson } from "@/lib/api/http";
import { db } from "@/lib/api/mock-db";

type PatchUnitBody = {
  label?: string;
  status?: string;
};

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const unit = db.units.find((item) => item.id === id);

  if (!unit) {
    return notFound("Unit not found.");
  }

  return ok(unit);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const unit = db.units.find((item) => item.id === id);

  if (!unit) {
    return notFound("Unit not found.");
  }

  const body = await parseJson<PatchUnitBody>(request);
  if (!body) {
    return badRequest("Invalid JSON body.");
  }

  if (body.label !== undefined) unit.label = body.label;
  if (body.status !== undefined) unit.status = body.status;

  return ok(unit);
}
