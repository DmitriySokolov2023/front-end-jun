import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import styles from './Hamburger.module.scss'
const Hamburger = () => {
	const [isVisible, setVisible] = useState(false)
	return (
		<div className={styles.wrapper}>
			<button onClick={() => setVisible(!isVisible)}>
				{isVisible ? <IoClose /> : <CgMenuRight />}
			</button>
			<div className={isVisible ? '' : styles.menu}>Menu</div>
		</div>
	)
}
export default Hamburger
