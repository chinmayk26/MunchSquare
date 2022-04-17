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