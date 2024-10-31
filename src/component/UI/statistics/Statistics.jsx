import { useProfile } from '../../screens/profile/useProfile'
import styles from './Statistics.module.scss'

const Statistics = () => {
	const { data } = useProfile()

	return (
		<div className={styles.statistics}>
			{data?.statistics?.map(st => (
				<div key={st.label}>
					<p>{st.label}</p>
					<p>{st.value}</p>
				</div>
			))}
		</div>
	)
}
export default Statistics
