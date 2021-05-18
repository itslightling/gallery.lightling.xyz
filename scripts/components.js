const TEMPLATE_APP_HEADER = `
<section class="header">
	<h1>{{ title }}</h1>
</section>
`;

const COMPONENT_APP_HEADER = {
	template: TEMPLATE_APP_HEADER,
	props: {
		title: String,
	},
};

export {
	COMPONENT_APP_HEADER,
}