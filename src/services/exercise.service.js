import { $axios } from '../api'

class ExerciseService {
	async getAll() {
		return $axios.get('/exercises')
	}
	async createExercise({ name, times, iconPath }) {
		const { data } = $axios.post('/exercises', {
			name,
			times: +times,
			iconPath
		})
		return data
	}
	async updateExercise({ name, times, iconPath }) {
		try {
			const { data } = $axios.put(`/exercises/${id}`, {
				name,
				times: +times,
				iconPath
			})
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
	async deleteExercise(id) {
		try {
			const { data } = $axios.delete(`/exercises/${id}`)
			return data
		} catch (e) {
			throw new Error(e)
		}
	}
}

export default new ExerciseService()
