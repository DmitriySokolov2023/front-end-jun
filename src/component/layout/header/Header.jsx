import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

const Header = () => {
	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			<button onClick={() => alert('lol')}>
				<FiArrowLeft />
			</button>
			<Hamburger />
		</header>
	)
}
export default Header
