const CACHE_NAME = 'uewi-konyv-cache-v1';
const urlsToCache = [
  'index.html',
  'style/style.css',
  'javascript/config.js',
  'javascript/fliphtml5-book.min.js',
  'javascript/jquery-3.6.0.min.js',
  'slide_javascript/slide.js',
  'files/icon.png',
  'files/logo.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});

