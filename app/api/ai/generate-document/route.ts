import { badRequest, ok, parseJson } from "@/lib/api/http";

type Body = { templateName?: string; variables?: Record<string, string> };

export async function POST(request: Request) {
  const body = await parseJson<Body>(request);
  if (!body?.templateName) {
    return badRequest("templateName is required.");
  }

  return ok({
    title: body.templateName,
    html: `<p>Generated from template: ${body.templateName}</p>`,
    variables: body.variables ?? {},
    source: "stubbed-ai",
  });
}
