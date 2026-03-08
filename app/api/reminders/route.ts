import { badRequest, ok, parseJson } from "@/lib/api/http";
import { db, nowIso } from "@/lib/api/mock-db";

type Body = {
  ticketId?: string;
  dueAt?: string;
  recipient?: string;
  channel?: "email" | "sms";
};

export async function GET() {
  return ok({ items: db.reminders });
}

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.dueAt || !body.recipient) {
    return badRequest("dueAt and recipient are required.");
  }

  const reminder = {
    id: crypto.randomUUID(),
    ticketId: body.ticketId,
    dueAt: body.dueAt,
    status: "pending" as const,
    channel: body.channel ?? "email",
    recipient: body.recipient,
    createdAt: nowIso(),
  };

  db.reminders.unshift(reminder);

  return ok(reminder, { status: 201 });
}
