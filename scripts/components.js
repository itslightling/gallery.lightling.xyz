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
	:style="{ backgroundImage: imageURL }"
>
	{{ title }}
</button>
`;

const TEMPLATE_APP_LINK_POPUP_WARNING = `
<div class="warning">
	<h4>Warning!</h4>
	<p>This gallery contains NSFW mature/adult material. Only browse if you are 18+ of age.</p>
	<div class="buttons">
		<button
			@click="$emit('disable')"
		>
			Go Back
		</button>
		<button
			@click="$emit('acknowledge')"
		>
			Acknowledge and Continue
		</button>
	</div>
</div>
`;

const TEMPLATE_APP_GALLERY_ELEMENT = `
<div class="gallery-element">
	<a
		:href="url"
		:style="{ backgroundImage: imageURL }"
	>
		<span>{{ title }}</span>
		<div
			v-if="indicator !== undefined"
			:class="colorCodeClass"
		></div>
	</a>
</div>
`;

const TEMPLATE_APP_GALLERY_CONTENT_INDICATORS = `
<div class="content-level">
	<h4>Content Level</h4>
	<ul>
		<li><div class="color-code cc-sfw"></div>: SFW (Non-mature content)</li>
		<li><div class="color-code cc-mature"></div>: Mature (Nonsexual Content)</li>
		<li><div class="color-code cc-adult"></div>: Adult (Sexual Content)</li>
	</ul>
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
	computed: {
		imageURL() {
			let str = "url(images/home/";
			switch (this.title) {
				case "traditional": return str + "traditional.jpg)";
				case "digital": return str + "digital.jpg)";
				case "photography": return str + "photography.jpg)";
				case "anthro": return str + "anthro.jpg)";
			}
		},
	},
};

const COMPONENT_APP_LINK_POPUP_WARNING = {
	template: TEMPLATE_APP_LINK_POPUP_WARNING,
};

const COMPONENT_APP_GALLERY_ELEMENT = {
	template: TEMPLATE_APP_GALLERY_ELEMENT,
	props: {
		url: String,
		img: String,
		title: String,
		indicator: Number,
	},
	computed: {
		imageURL() {
			return `url(${this.img})`;
		},
		colorCodeClass() {
			switch(Number(this.indicator)) {
				case 0: return "color-code cc-sfw";
				case 1: return "color-code cc-mature";
				case 2: return "color-code cc-adult";
			}
		}
	},
};

const COMPONENT_APP_GALLERY_CONTENT_INDICATORS = {
	template: TEMPLATE_APP_GALLERY_CONTENT_INDICATORS,
}

export {
	COMPONENT_APP_HEADER,
	COMPONENT_APP_FOOTER,
	COMPONENT_APP_LINK_ICONS,
	COMPONENT_APP_LINK_GALLERY_ELEMENT,
	COMPONENT_APP_LINK_POPUP_WARNING,
	COMPONENT_APP_GALLERY_ELEMENT,
	COMPONENT_APP_GALLERY_CONTENT_INDICATORS,
}