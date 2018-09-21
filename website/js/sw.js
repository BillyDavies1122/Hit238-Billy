self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'main.js',
        'addingAndReceiving.js',
        'index.html',
        'createEntry.html',
        'success.html',
        'viewEntry.html',
        'ViewHistory.html'
      ]);
    })
  );
});
