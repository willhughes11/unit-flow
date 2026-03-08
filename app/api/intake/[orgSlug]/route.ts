import { badRequest, ok, parseJson } from "@/lib/api/http";
import { db, nowIso } from "@/lib/api/mock-db";

type IntakeBody = {
  propertyId?: string;
  unitId?: string;
  description?: string;
  urgency?: string;
  tenantName?: string;
};

export async function POST(request: Request, { params }: { params: Promise<{ orgSlug: string }> }) {
  const { orgSlug } = await params;
  const body = await parseJson<IntakeBody>(request);

  if (!body || !body.unitId || !body.description) {
    return badRequest("unitId and description are required.");
  }

  const unit = db.units.find((item) => item.id === body.unitId);
  if (!unit) {
    return badRequest("unitId must reference an existing unit.");
  }

  const now = nowIso();
  const ticket = {
    id: crypto.randomUUID(),
    propertyId: body.propertyId ?? unit.propertyId,
    unitId: unit.id,
    title: "Tenant intake request",
    description: body.description,
    status: "new",
    category: "maintenance_general",
    priority: body.urgency === "urgent" ? "urgent" : "normal",
    createdAt: now,
    updatedAt: now,
  };

  db.tickets.unshift(ticket);

  return ok(
    {
      orgSlug,
      ticket,
      message: `Intake received for ${body.tenantName ?? "tenant"}.`,
    },
    { status: 201 },
  );
}
