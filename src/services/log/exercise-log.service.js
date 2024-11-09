import { $axios } from '../api'

class ExerciseLogService {
	async get(id) {
		const { data } = $axios.post(`/exercises/log/${id}`)
		return data
	}
	async create(id) {
		const { data } = $axios.post(`/exercises/log/${id}`)
		return data
	}
	async update(data, id) {
		const { data } = $axios.put(`/exercises/log/time/${id}`, data)
		return data
	}
	async patch(id, isCompleted) {
		const { data } = $axios.patch(`/exercises/log/completed/${id}`, isCompleted)
		return data
	}
}

export default new ExerciseLogService()
