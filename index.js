(async () => {
	try {
		if (`serviceWorker` in navigator) {
			await navigator.serviceWorker.register(`./sw.js`);
		};
	} catch (err) {
		console.error(err);
	};
	return;
})();
