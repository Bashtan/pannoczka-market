// Always answers 404 for /CLAUDE.md. This runs before static assets and their
// edge cache, so the path stays closed even if the file is uploaded by mistake
// or Cloudflare still holds a copy from before it was removed.
export function onRequest() {
  return new Response('Not found', {
    status: 404,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
