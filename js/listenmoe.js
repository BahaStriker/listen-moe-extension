$(window).on('hashchange', () => {
	var auth_token = localStorage['satellizer_token'] ? localStorage['satellizer_token'] : null;
	chrome.storage.local.set({auth_token: auth_token});
});
