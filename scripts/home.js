import * as Components from './components.js';

window.onload = function(e) {
	Vue.directive('focus', {
		inserted: function (el) {
			el.focus();
		}
	});
	new Vue({
		el: '#app',
		components: {
			'app-header': Components.COMPONENT_APP_HEADER,
			'app-footer': Components.COMPONENT_APP_FOOTER,
			'app-icons': Components.COMPONENT_APP_LINK_ICONS,
			'app-gallery-element': Components.COMPONENT_APP_LINK_GALLERY_ELEMENT,
			'app-gallery-warning': Components.COMPONENT_APP_LINK_POPUP_WARNING,
		},
		data: {
			currentTarget: "",
			popupActive: false,
		},
		methods: {
			goToGallery() {
				switch(this.currentTarget) {
					case "traditional":
						location.href = "gallery/traditional";
						break;
					case "digital":
						location.href = "gallery/digital";
						break;
					case "photography":
						location.href = "gallery/photo";
						break;
					case "anthro":
						location.href = "gallery/anthro";
						break;
				}
			},
			setAndGo(title) {
				this.currentTarget = title;
				this.goToGallery();
			},
			setAndWarn(title) {
				this.currentTarget = title;
				this.popupActive = true;
			},
			disablePopup() {
				this.popupActive = false;
			}
		},
	});
};