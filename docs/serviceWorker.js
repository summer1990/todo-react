this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/todo-react/',
        '/todo-react/index.html',
        '/todo-react/static/css/main.6ee84dcf.css',
        '/todo-react/static/js/main.70b8a2ad.js',
        '/todo-react/manifest.json',
        '/todo-react/todo.jpg'
      ]);
    })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
  );
});