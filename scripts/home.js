import * as Components from './components.js';

window.onload = function(e) {
	new Vue({
		el: '#app',
		components: {
			'app-header': Components.COMPONENT_APP_HEADER,
			'app-main': Components.COMPONENT_APP_MAIN,
			'app-footer': Components.COMPONENT_APP_FOOTER,
		},
		data: {
			
		},
	});
};