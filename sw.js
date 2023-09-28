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
