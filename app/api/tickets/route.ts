import { badRequest, ok, parseJson } from "@/lib/api/http";
import { db, nowIso, type Ticket } from "@/lib/api/mock-db";

type CreateTicketBody = {
  propertyId?: string;
  unitId?: string;
  title?: string;
  description?: string;
  status?: string;
  category?: string;
  priority?: string;
};

export async function GET() {
  return ok({ items: db.tickets });
}

export async function POST(request: Request) {
  const body = await parseJson<CreateTicketBody>(request);
  if (!body) {
    return badRequest("Invalid JSON body.");
  }

  if (!body.propertyId || !body.unitId || !body.title || !body.description) {
    return badRequest("propertyId, unitId, title, and description are required.");
  }

  const property = db.properties.find((item) => item.id === body.propertyId);
  const unit = db.units.find((item) => item.id === body.unitId);
  if (!property || !unit) {
    return badRequest("propertyId and unitId must reference existing records.");
  }

  const now = nowIso();
  const ticket: Ticket = {
    id: crypto.randomUUID(),
    propertyId: body.propertyId,
    unitId: body.unitId,
    title: body.title,
    description: body.description,
    status: body.status ?? "new",
    category: body.category ?? "maintenance_general",
    priority: body.priority ?? "normal",
    createdAt: now,
    updatedAt: now,
  };

  db.tickets.unshift(ticket);

  return ok(ticket, { status: 201 });
}
