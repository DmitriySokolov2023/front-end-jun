import Layout from '../../layout/Layout'
import Statistics from '../../UI/statistics/Statistics'
import styles from './Profile.module.scss'

const Profile = () => {
	return (
		<>
			<Layout heading='profile'>
				<Statistics />
			</Layout>
			<div className={`${styles.before_after} ${styles.center}`}>
				<div>1</div>
				<div>2</div>
			</div>
		</>
	)
}
export default Profile
