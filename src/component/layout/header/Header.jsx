import { FiArrowLeft } from 'react-icons/fi'
import { MdSportsGymnastics } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = ({ backLink }) => {
	const { isAuth } = useAuth()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button onClick={() => <Link to={navigate(-1)} />}>
					<FiArrowLeft size={30} />
				</button>
			) : (
				<button onClick={() => <Link to={navigate('/profile')} />}>
					<MdSportsGymnastics size={30} />
				</button>
			)}

			<Hamburger />
		</header>
	)
}
export default Header
