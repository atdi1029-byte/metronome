// Network-only — no caching, just makes PWA installable
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
