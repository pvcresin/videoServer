import { setInterval } from "timers";

const input = document.querySelector('input')

const upload = file => {
	const url = '/upload'
	const sendData = new FormData()
	sendData.append('video', file)
	return fetch(url, {
		method: 'POST',
		body: sendData
	}).then(response => {
		return response.text()
	})
}
const getVideos = () => {
	const url = '/list'
	return fetch(url).then(response => {
		return response.json()
	})
}

input.addEventListener('change', e => {
	const file = e.target.files[0]
	if (file.type !== 'video/webm') {
		alert('only webm file!')
	} else {
		upload(file).then(res => {
			console.log(res)
		})
	}
})

setInterval(() => {
	getVideos().then(res => {
		console.log(res)
	})
}, 1000)