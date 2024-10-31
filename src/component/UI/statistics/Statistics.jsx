import { useQuery } from '@tanstack/react-query'
import userService from '../../../services/user.service'
import styles from './Statistics.module.scss'

const Statistics = () => {
	const profile = useQuery({
		queryKey: ['profile'],
		queryFn: userService.getProfile()
	})
	console.log(profile)
	return (
		<div className={styles.statistics}>
			<div>
				<p>Minutes</p>
				<p>20</p>
			</div>
			<div>
				<p>Level</p>
				<p>Hard</p>
			</div>
			<div>
				<p>Up</p>
				<p>5%</p>
			</div>
		</div>
	)
}
export default Statistics
