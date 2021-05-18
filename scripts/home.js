import * as Components from './components.js';

window.onload = function(e) {
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
						console.log("traditional");
						break;
					case "digital":
						console.log("digital");
						break;
					case "photography":
						console.log("photo");
						break;
					case "anthro":
						console.log("anthro");
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