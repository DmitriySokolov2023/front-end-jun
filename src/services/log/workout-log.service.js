import { $axios } from '../../api'

class WorkoutLogService {
	async getById(id) {
		return $axios.get(`/workouts/log/${id}`)
	}
	async create(id) {
		const { data } = $axios.post(`/workouts/log/${id}`)
		return data
	}
	async patch(id) {
		try {
			const { data } = $axios.patch(`/workouts/log/complete/${id}`, {
				name,
				exerciseIds
			})
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
}
export default new WorkoutLogService()
