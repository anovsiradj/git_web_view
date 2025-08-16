
import { Viewer } from './js/Viewer.js'

const form = document.querySelector('form')

const viewer = new Viewer
const loaders = {}

$(form).on('submit', function (event) {
	event.preventDefault()

	let data = $(this).serializeArray()

	localStorage.setItem('__form', JSON.stringify(data))
})

$(function () {
	let cache = localStorage.getItem('__form')
	if (cache) {
		let data = JSON.parse(cache)
		data.forEach(item => {
			form.elements.namedItem(item.name).value = item.value
		})
	}
})
