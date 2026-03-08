import { badRequest, ok, parseJson } from "@/lib/api/http";

type Body = { description?: string };

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.description) {
    return badRequest("description is required.");
  }

  const normalized = body.description.toLowerCase();
  const category = normalized.includes("leak") ? "plumbing" : "maintenance_general";
  const priority = normalized.includes("flood") || normalized.includes("urgent") ? "urgent" : "normal";

  return ok({
    category,
    priority,
    summary: body.description.slice(0, 160),
    suggestedNextStep: "Acknowledge tenant and assign vendor.",
    source: "stubbed-ai",
  });
}
