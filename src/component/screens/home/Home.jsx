import { useNavigate } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Button from '../../UI/button/Button'
import Statistics from '../../UI/statistics/Statistics'
import styles from './Home.module.scss'

function Home() {
	const isAuth = false
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
				<Statistics />
			</div>
		</Layout>
	)
}

export default Home
