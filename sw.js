const CACHE_NAME = 'cool-cache';

// Add whichever assets you want to pre-cache here:
const PRECACHE_ASSETS = [
	`/assets/`,
	`/src/`
]

if (workbox.navigationPreload.isSupported()) {
	workbox.navigationPreload.enable();
};

self.addEventListener(`fetch`, (e) => {
	e.respondWith((async () => {
		try {
			var res = await fetch(e.request);
			var cache = await caches.open(`cache`);
			cache.put(e.request.url, res.clone());
			return res;
		} catch (err) {
			return caches.match(e.request);
		};
	})());
	return;
});
