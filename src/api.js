import axios from 'axios'
import Cookie from 'js-cookie'

export const $axios = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${Cookie.get('token')}`
	}
})
