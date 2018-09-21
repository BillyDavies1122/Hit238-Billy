var CACHE_TITLE = 'FitnessApp-cache';
var CACHE_VERSION = 'v1';
var CACHE_NAME = CACHE_TITLE + '-' + CACHE_VERSION;
var urlsToCache = [
  '/',
  'js/main.js',
  'js/addingAndReceiving.js',
  'index.html',
  'createEntry.html',
  'success.html',
  'viewEntry.html',
  'ViewHistory.html',
  'image/placeHolder.jpg',
  'styles/stylesheet.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
