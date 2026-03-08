import { badRequest, ok, parseJson } from "@/lib/api/http";

type Body = { history?: string[] };

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.history || body.history.length === 0) {
    return badRequest("history array is required.");
  }

  return ok({
    summary: `Ticket summary: ${body.history.slice(0, 3).join(" | ")}`,
    source: "stubbed-ai",
  });
}
