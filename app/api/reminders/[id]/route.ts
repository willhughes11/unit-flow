import { badRequest, notFound, ok, parseJson } from "@/lib/api/http";
import { db } from "@/lib/api/mock-db";

type Body = { status?: "pending" | "sent" | "dismissed" };

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const reminder = db.reminders.find((item) => item.id === id);

  if (!reminder) {
    return notFound("Reminder not found.");
  }

  const body = await parseJson<Body>(request);
  if (!body || !body.status) {
    return badRequest("status is required.");
  }

  reminder.status = body.status;

  return ok(reminder);
}
