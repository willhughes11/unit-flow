import { ok } from "@/lib/api/http";
import { db } from "@/lib/api/mock-db";

export async function POST() {
  const now = Date.now();
  let processed = 0;

  for (const reminder of db.reminders) {
    if (reminder.status !== "pending") continue;
    if (new Date(reminder.dueAt).getTime() > now) continue;
    reminder.status = "sent";
    processed += 1;
  }

  return ok({ processed });
}
