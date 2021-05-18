const TEMPLATE_APP_HEADER = `
<section class="header">
	<h1>{{ title }}</h1>
</section>
`;

const TEMPLATE_APP_FOOTER = `
<section class="footer">
	<p>&copy; Lightling 2014-2021. All Rights Reserved.</p>
	<p><a href="#">Back To Top</a></p>
</section>
`;

const TEMPLATE_APP_LINK_ICONS = `
<div class="icons">
	<a href='https://www.redbubble.com/people/lightling/shop?asc=u'>
		<img
			src='images/places/rb.svg'
			alt='red bubble icon'
			title='RedBubble'
		/>
	</a>
	<a href='https://www.deviantart.com/xlightling'>
		<img
			src='images/places/da.svg'
			alt='deviant art icon'
			title='DeviantArt'
		/>
	</a>
	<a href='https://www.furaffinity.net/user/lightling/'>
		<img
			src='images/places/fa.svg'
			alt='fur affinity icon'
			title='FurAffinity'
		/>
	</a>
</div>
`;

const TEMPLATE_APP_LINK_GALLERY_ELEMENT = `
<button
	id="title"
	@click="$emit('click', title)"
>
	{{ title }}
</button>
`;

const TEMPLATE_APP_LINK_POPUP_WARNING = `
<div class="warning">
	<h4>Warning!</h4>
	<p>This gallery contains NSFW mature/adult material. Only browse if you are 18+ of age.</p>
	<button
		@click="$emit('disable')"
	>
		Go Back
	</button>
	<button
		@click="$emit('acknowledge')"
	>
		Acknowledge and Continute
	</button>
</div>
`;

const COMPONENT_APP_HEADER = {
	template: TEMPLATE_APP_HEADER,
	props: {
		title: String,
	},
};

const COMPONENT_APP_FOOTER = {
	template: TEMPLATE_APP_FOOTER,
};

const COMPONENT_APP_LINK_ICONS = {
	template: TEMPLATE_APP_LINK_ICONS,
};

const COMPONENT_APP_LINK_GALLERY_ELEMENT = {
	template: TEMPLATE_APP_LINK_GALLERY_ELEMENT,
	props: {
		title: String,
	},
};

const COMPONENT_APP_LINK_POPUP_WARNING = {
	template: TEMPLATE_APP_LINK_POPUP_WARNING,
}

export {
	COMPONENT_APP_HEADER,
	COMPONENT_APP_FOOTER,
	COMPONENT_APP_LINK_ICONS,
	COMPONENT_APP_LINK_GALLERY_ELEMENT,
	COMPONENT_APP_LINK_POPUP_WARNING,
}