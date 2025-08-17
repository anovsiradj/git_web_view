export class Viewer {
	url;
	loader;

	page;
	jsMap = {};
	cssMap = {};

	constructor(url, loader) {
		this.url = url
		this.loader = loader
	}

	main(view) {
		this.loader.load(this.url.href, (data) => {
			this.parse(data, view)
		})
	}

	parse(pageStr, view) {
		let pageDom = $.parseHTML(pageStr, view.contentDocument, true)

		let cssDom = $(pageDom).find('link[rel=stylesheet]')
		let jsDom = $(pageDom).find('script[src]')

		dump(cssDom)
		dump(jsDom)
	}
}
