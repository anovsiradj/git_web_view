
import { PHPLoader } from './js/PHPLoader.js?3'
import { Viewer } from './js/Viewer.js?2'

const view = document.querySelector('iframe')
const form = document.querySelector('form')

const phpLoaderUrl = new URL(`${location.protocol}//${location.host}/${location.pathname}/php_loader/`)
console.debug(phpLoaderUrl)

const loaders = {
	PHPLoader: new PHPLoader(phpLoaderUrl),
}

$(form).on('submit', function (event) {
	let config = formToJson(this)
	event.preventDefault()
	localStorage.setItem('__form', JSON.stringify(config))

	// console.debug(config)

	let url = new URL(config.target)
	let loader = loaders[config.loader]
	let viewer = new Viewer(url, loader);

	console.debug(url)
	console.debug(loader)
	console.debug(viewer)

	viewer.main(view)
})

$(function () {
	let cache = localStorage.getItem('__form')
	if (cache) {
		let config = JSON.parse(cache)
		// console.debug(config)
		for (let i in config) {
			form.elements.namedItem(i).value = config[i]
		}
	}
})

function formToJson(elem) {
	let data = {}
	let arro = $(elem).serializeArray()
	arro.forEach(i => {
		data[i.name] = i.value
	})
	return data
}
