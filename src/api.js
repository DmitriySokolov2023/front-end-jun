import axios from 'axios'
import Cookie from 'js-cookie'
import { TOKEN } from './app.constants'

export const $axios = axios.create({
	baseURL: 'http://localhost:5000/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookie.get(TOKEN) ? `Bearer ${Cookie.get(TOKEN)}` : ''
	}
})
