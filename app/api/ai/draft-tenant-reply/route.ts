import { badRequest, ok, parseJson } from "@/lib/api/http";

type Body = { tenantName?: string; issueSummary?: string };

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.issueSummary) {
    return badRequest("issueSummary is required.");
  }

  return ok({
    draft: `Hi ${body.tenantName ?? "there"}, we received your request: ${body.issueSummary}. We are coordinating next steps and will follow up shortly.`,
    source: "stubbed-ai",
  });
}
