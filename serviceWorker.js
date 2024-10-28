// Nome da key onde ficaram guardados os arquivos
const staticBurgerIo = "zburguer"
// Lista de aquivos para ser salvos em cache
const assets = [
    "/",
    "/index.html",
    "/item_details.html",
    "/confirm_order.html",
    "/style.css",
    "/app.js",
    "/assets/Logo de Hamburgueria Artesanal.png",
    "/assets/salada.jpg",
    "/assets/bacon.jpg",
    "/assets/frango.jpg",
    "/assets/file.jpg",
]
// Salva os arquivos listados em cache
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticBurgerIo).then(cache => {
            cache.addAll(assets)
        })
    )
})
// Trazemos os dados salvos em cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})