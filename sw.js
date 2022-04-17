const assets to.cache = [  
'/button.html',  
'/homepage.php',     
     
]  
  
self. addEventListener ('install', function (event) {  
    event. wait Until (  
        caches. Open('staticAssetsCache')  
        then (function (cache) {  
              return cache Add All (assetsToCache.);  
        })  
      );  
});  


self.addEventListener("install", event => {
  console.log("Service Worker installed.");
});

self.addEventListener("activate", event => {
  console.log("Service Worker activated.");
});

// fetch event
self.addEventListener('fetch',evt =>{
console.log(evt.request.fetch);
});