export async function GET() {
  return new Response(JSON.stringify({ ok: false }), { status: 500 });
}
