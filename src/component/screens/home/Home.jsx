import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Button from '../../UI/button/Button'
import styles from './Home.module.scss'

function Home() {
	const { isAuth } = useAuth(false)
	const navigation = useNavigate()
	return (
		<Layout bgImage='/images/home-bg.jpg'>
			<div className={styles.home}>
				<div className={styles.home__content}>
					<Button
						onClick={() => navigation(!isAuth ? '/auth' : '/new-workout')}
					>
						{isAuth ? 'New' : 'Sign in'}
					</Button>
					<h1>EXERCISES FOR THE SHOULDERS</h1>
				</div>

				<div className={styles.home__statistic}>
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
			</div>
		</Layout>
	)
}

export default Home
