export async function GET() {
  return new Response("google-site-verification: google9123920eb0589edc.html", {
    headers: { "Content-Type": "text/html" },
  });
}
