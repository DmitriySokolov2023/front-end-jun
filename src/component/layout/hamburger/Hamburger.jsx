import { useClickAway } from '@uidotdev/usehooks'
import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import styles from './Hamburger.module.scss'
import Menu from './Menu.jsx'

const Hamburger = () => {
	const [isVisible, setVisible] = useState(false)

	const ref = useClickAway(() => {
		setVisible(false)
	})
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setVisible(!isVisible)}>
				{isVisible ? <IoClose /> : <CgMenuRight />}
			</button>
			<Menu isVisible={isVisible} setIsShow={setVisible} />
		</div>
	)
}
export default Hamburger
