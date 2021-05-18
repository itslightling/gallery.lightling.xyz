const TEMPLATE_APP_HEADER = `
<section class="header">
	<h1>{{ title }}</h1>
</section>
`;

const TEMPLATE_APP_MAIN = `
<section class="main">
	<h2>{{ title }}</h2>
</section>
`;

const TEMPLATE_APP_FOOTER = `
<section class="footer">
	<p>&copy; Lightling 2014-2021. All Rights Reserved.</p>
	<p><a href="#">Back To Top</a></p>
</section>
`;

const COMPONENT_APP_HEADER = {
	template: TEMPLATE_APP_HEADER,
	props: {
		title: String,
	},
};

const COMPONENT_APP_MAIN = {
	template: TEMPLATE_APP_MAIN,
	props: {
		title: String,
	},
};

const COMPONENT_APP_FOOTER = {
	template: TEMPLATE_APP_FOOTER,
	props: {
		
	},
};

export {
	COMPONENT_APP_HEADER,
	COMPONENT_APP_MAIN,
	COMPONENT_APP_FOOTER,
}