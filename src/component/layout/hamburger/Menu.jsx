import cn from 'clsx'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import { TOKEN } from '../../../app.constants'
import { useAuth } from '../../../hooks/useAuth'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({ isVisible, setIsShow }) => {
	const { setIsAuth } = useAuth()
	const logoutHandler = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)
	}
	return (
		<nav
			className={cn(styles.menu, {
				[styles.show]: isVisible
			})}
		>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
