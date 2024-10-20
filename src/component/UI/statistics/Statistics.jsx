import styles from './Statistics.module.scss'

const Statistics = () => {
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
