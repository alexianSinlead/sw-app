const cacheVersion = 'v1.0.0';
const swScope = `/webPushNotifications`;
const FILES_TO_CACHE = [
  './offline.html',
];

function scopeFile(path) {
  return `${swScope}/${path}`;
}

self.addEventListener(`install`, event => {
  console.log(`${cacheVersion} installing...`)

  event.waitUntil(
    caches.open(`static-${cacheVersion}`).then(cache => {
      // cache.add(`${swScope}/img/cat.svg`)

      return cache.addAll([
        ``,
        `index.html`,
        `style.css`,
        `app.js`,
        `img/cat.svg`,
        `img/dog.svg`,
        `img/icon.png`,
      ].map(scopeFile))
        .then(() => self.skipWaiting());
    })
  )
})

self.addEventListener('fetch', event => {
  if (event.request.mode != 'navigate')
    return;

  event.respondWith(
    fetch(event.request)
        .catch(async () => {
          return caches.open(CACHE_NAME)
              .then(cache => {
                return cache.match('../offline.html');
              });
        })
  );
});