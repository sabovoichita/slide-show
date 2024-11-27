// Name of the cache
const CACHE_NAME = "offline-cache-v1";

// Resources to cache
const OFFLINE_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  // css
  "./css/action-btn.css",
  "./css/clock.css",
  "./css/style.css",
  // js
  "./js/clock.js",
  "./js/index.js",
  "./js/utils.js"
];

// Install the service worker and cache assets
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Caching offline assets");
      return cache.addAll(OFFLINE_ASSETS);
    })
  );
});

// Fetch resources from the cache when offline
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
