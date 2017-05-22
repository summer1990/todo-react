this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/static/css/main.6ee84dcf.css',
        '/static/js/main.1ef122aa.js',
        '/todo.jpg'
      ]);
    })
  );
});

this.addEventListener('fetch',function(event) {
  event.respondWith(
    caches.match(event.request).catch(function() {
      return fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
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