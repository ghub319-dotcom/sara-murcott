// Very simple service worker for caching shell (PWA)
const CACHE='greenbite-v1';
self.addEventListener('install', e=> {
  e.waitUntil(caches.open(CACHE).then(c=> c.addAll([
    '/index.html','/styles.css','/scripts.js'
  ])));
});
self.addEventListener('fetch', e=> {
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
