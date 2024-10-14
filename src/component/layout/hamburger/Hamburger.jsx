import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import styles from './Hamburger.module.scss'
import Menu from './Menu'
const Hamburger = () => {
	const [isVisible, setVisible] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setVisible(!isVisible)}>
				{isVisible ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isVisible={isVisible} />
		</div>
	)
}
export default Hamburger
