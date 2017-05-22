var version = 'v1'

this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/static/js/main.266b19b6.js',
        '/static/css/main.6ee84dcf.js',
        '/todo.jpg'
      ]);
    })
  );
});

this.addEventListener('fetch',function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request).then(function(response) {
        return caches.open(version).then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    }).catch(function(error) {
    //   return caches.match('/sw-test/gallery/myLittleVader.jpg');
    // 
      throw error;
    })
  );
})