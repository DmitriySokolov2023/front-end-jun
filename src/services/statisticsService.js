import { $axios } from '../api'

export class statisticsService {
	get() {
		$axios.get('/users/profile')
	}
}
