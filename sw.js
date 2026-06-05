// Simple service worker for GAME repo PWA offline cache
// Caches index + manifest + all static assets/images for the mobile web app
const CACHE_NAME = 'game-gangnam-reunion-v1';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/images/gangnam_lounge.jpg',
  './assets/images/gangnam_hotel.jpg',
  './assets/images/gangnam_sua.jpg',
  './assets/images/gangnam_jieun.jpg',
  './assets/images/gangnam_harin.jpg',
  './assets/images/gangnam_yujin.jpg'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch(() => {});
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  // Basic: try cache first, fallback network (for static app offline use)
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((resp) => {
        // Optionally cache new image/etc responses at runtime
        if (req.method === 'GET' && resp && resp.status === 200 && (req.url.includes('/assets/') || req.url.endsWith('.html') || req.url.endsWith('manifest.json'))) {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, respClone)).catch(() => {});
        }
        return resp;
      }).catch(() => cached); // offline fallback if any
    })
  );
});
