import { Loader } from './Loader.js?3';

export class PHPLoader extends Loader {
	constructor(url) {
		super(url)
	}

	load(target, handle) {
		$.get(this.url.href, {target}, (result, status, xhr) => {
			// console.debug(result, xhr.getResponseHeader('Content-Type'))
			handle(result, xhr.getResponseHeader('Content-Type'))
		})
	}
}
