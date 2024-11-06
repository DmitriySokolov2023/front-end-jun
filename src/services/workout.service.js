import { $axios } from '../api'

class WorkoutService {
	async getAll() {
		return $axios.get('/workouts')
	}
	async getById(id) {
		return $axios.get(`/workouts/${id}`)
	}
	async create({ name, exerciseIds }) {
		const { data } = $axios.post('/workouts', {
			name,
			exerciseIds
		})
		console.log(data)
		return data
	}
	async update({ name, exerciseIds }) {
		try {
			const { data } = $axios.put(`/workouts/${id}`, {
				name,
				exerciseIds
			})
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
	async delete(id) {
		try {
			const { data } = $axios.delete(`/workouts/${id}`)
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
}
export default new WorkoutService()
