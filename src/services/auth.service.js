import Cookies from 'js-cookie'
import { $axios } from '../api'

class AuthService {
	async main(type, userData) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, userData)
			if (data.token) Cookies.set('token', data.token)
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
}

export default new AuthService()
