const CACHE_NAME = "tony-v1"
const cache_urls = ["/offline/view.html","/offline/style.css","/offline/mapa.jpg"]

self.addEventListener("install",function(ev){
  console.log("SW instalada")

  caches.open(CACHE_NAME)
        .then(function(cache){
          console.log("Cache opened")
          return cache.addAll(cache_urls)
        })
})

self.addEventListener("fetch",function(ev){
  console.log(ev.request)
  ev.respondWith(
    caches.match(ev.request)
          .then(function(response){
            if(response){
              console.log("Estoy en el cache")
              return response;
            }
            console.log("no estoy en el cache")
            return fetch(ev.request)
          })
  )
})