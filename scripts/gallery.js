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
				'gallery-element': Components.COMPONENT_APP_GALLERY_ELEMENT,
				'content-indicators': Components.COMPONENT_APP_GALLERY_CONTENT_INDICATORS,
			},
			data: {
				galleryData: fetched.sections,
			},
			methods: {
				toAnchor(str) {
					return str.replace(' ','_');
				},
				toAnchorLink(str) {
					return '#' + this.toAnchor(str);
				},
			},
		});
	});
};