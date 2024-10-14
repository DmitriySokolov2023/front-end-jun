import clsx from 'clsx'
import styles from './Hamburger.module.scss'
import { menu } from './menu.data'

const Menu = ({ isVisible }) => {
	const logoutHandler = () => {}

	return (
		<nav className={clsx(styles.menu, { [styles.show]: isVisible })}>
			<ul>
				{menu.map((item, index) => (
					<li key={`_menu_${index}`}>
						{item.title}
						{/* <Link to={item.link}>{item.title}</Link> */}
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
