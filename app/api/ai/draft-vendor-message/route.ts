import { badRequest, ok, parseJson } from "@/lib/api/http";

type Body = { vendorName?: string; issueSummary?: string; unitLabel?: string };

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.issueSummary) {
    return badRequest("issueSummary is required.");
  }

  return ok({
    draft: `Hi ${body.vendorName ?? "team"}, please review ${body.issueSummary} at unit ${body.unitLabel ?? "N/A"}. Share availability for the next 24 hours.`,
    source: "stubbed-ai",
  });
}
