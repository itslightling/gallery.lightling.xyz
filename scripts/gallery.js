import * as Components from './components.js';

window.onload = function(e) {
	let fetched;
	fetch(DATA_PATH)
	.then(response => response.json())
	.then(data => {
		fetched = data;
		new Vue({
			el: '#app',
			components: {
				'app-header': Components.COMPONENT_APP_HEADER,
				'app-footer': Components.COMPONENT_APP_FOOTER,
				'app-gallery': Components.COMPONENT_APP_GALLERY,
			},
			data: {
				galleryData: fetched.sections,
			},
		});
	});
};