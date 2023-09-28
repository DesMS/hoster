(async () => {
	try {
		if (`serviceWorker` in navigator) {
			await navigator.serviceWorker.register(`./sw.js`);
		};
	} catch (err) {
		console.error(err);
	};
	try {
		if (`registerProtocolHandler` in navigator) {
			await navigator.unregisterProtocolHandler(`web+edit`, `https://desms.github.io/hoster/?edit=%s`, `File Handler`);
		};
	} catch (err) {
		console.error(err);
	};
	window.addEventListener(`click`, async () => {
		try {
			if (`registerProtocolHandler` in navigator) {
				await navigator.registerProtocolHandler(`web+edit`, `https://desms.github.io/hoster/?edit=%s`, `File Handler`);
			};
		} catch (err) {
			console.error(err);
		};
		return;
	}, false);
	return;
})();
