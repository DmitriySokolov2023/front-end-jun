import cn from 'clsx'
import { CiUser } from 'react-icons/ci'
import Layout from '../../layout/Layout'
import Loader from '../../UI/Loader'
import Statistics from '../../UI/statistics/Statistics'
import styles from './Profile.module.scss'
import { useProfile } from './useProfile'
const Profile = () => {
	const { data, isLoading } = useProfile()
	console.log(data, isLoading)
	return (
		<>
			<Layout heading='profile' bgImage={'/images/profile-bg.jpg'}>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<div className={styles.profile}>
							<CiUser size={50} />
							<h2>{data?.email}</h2>
						</div>
						<Statistics />
					</>
				)}
			</Layout>
			<div className={cn(styles.before_after, 'wrapper-inner-page')}>
				<div>
					<p className={styles.center}>Before</p>
					<img src='/images/before.jpg' alt='' />
				</div>
				<div>
					<p className={styles.center}>After</p>
					<img src='/images/after.jpg' alt='' />
				</div>
			</div>
		</>
	)
}
export default Profile
