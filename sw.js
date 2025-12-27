const CACHE_NAME = "expenser-v8.2-offline";
const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png",
    "https://cdn.jsdelivr.net/npm/chart.js" 
];

// 1. Install Phase: Cache all files immediately
self.addEventListener("install", (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("[ServiceWorker] Pre-caching offline assets");
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// 2. Activate Phase: Clean up old caches
self.addEventListener("activate", (evt) => {
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(
                keyList.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log("[ServiceWorker] Removing old cache", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// 3. Fetch Phase: Serve from Cache, fall back to Network
self.addEventListener("fetch", (evt) => {
    evt.respondWith(
        caches.match(evt.request).then((response) => {
            // Return cached response if found
            if (response) {
                return response;
            }
            // Otherwise, fetch from network
            return fetch(evt.request).catch(() => {
                // If offline and navigation fails, return index.html
                if (evt.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
