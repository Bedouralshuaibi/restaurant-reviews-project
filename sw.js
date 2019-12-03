const cacheName = 'v1';

// Call Install Event
self.addEventListener('install', function(event) {
console.log('Service Worker: installed');
});
 // Call Activate Event
 self.addEventListener('activate', e => {
  console.log('ServiceWorker activate')
//Remove unwanted caches
e.waitUntil(
  caches.keys().then(cacheNames =>{
    return Promise.all(
      cacheNames.map(cache =>{
        if(cache !== cacheName)
        console.log('Service Worker: clearing old cache');
        return caches.delete(cache);
      })
    );
  })
);
});

//Call Fech Event
self.addEventListener('fetch', e =>{
  console.log('Service Worker: Fetching')
  e.respondWith(
    fetch(e.request)
     .then(res => {
      //Make copy/clone of response
      const resClone = res.clone();
      //open cache
      caches
      .open(cacheName)
      .then(cache => {
        //add response to catche
        cache.put(e.request, resClone);
      });
    return res;
  }).catch(err => catches.match(e.request).then(res => res))
);
});
