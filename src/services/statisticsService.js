import { $axios } from '../api'

class StatisticsService {
	async get() {
		try {
			const { data } = await $axios.get('/users/profile')
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
}

export default new StatisticsService()
