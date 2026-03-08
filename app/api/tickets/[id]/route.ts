import { badRequest, notFound, ok, parseJson } from "@/lib/api/http";
import { db, nowIso } from "@/lib/api/mock-db";

type PatchTicketBody = {
  title?: string;
  description?: string;
  status?: string;
  category?: string;
  priority?: string;
};

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ticket = db.tickets.find((item) => item.id === id);

  if (!ticket) {
    return notFound("Ticket not found.");
  }

  return ok(ticket);
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const ticket = db.tickets.find((item) => item.id === id);

  if (!ticket) {
    return notFound("Ticket not found.");
  }

  const body = await parseJson<PatchTicketBody>(request);
  if (!body) {
    return badRequest("Invalid JSON body.");
  }

  if (body.title !== undefined) ticket.title = body.title;
  if (body.description !== undefined) ticket.description = body.description;
  if (body.status !== undefined) ticket.status = body.status;
  if (body.category !== undefined) ticket.category = body.category;
  if (body.priority !== undefined) ticket.priority = body.priority;
  ticket.updatedAt = nowIso();

  return ok(ticket);
}
