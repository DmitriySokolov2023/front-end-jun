import Cookies from 'js-cookie'
import { $axios } from '../api'

class AuthService {
	async main(type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`)
			if (data.token) Cookies.set('token', data.token)
		} catch (e) {
			throw new Error(e)
		}
	}
}

export default new AuthService()
