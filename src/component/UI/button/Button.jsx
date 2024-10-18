import cn from 'clsx'
import styles from './Button.module.scss'
const Button = ({ children, onClick, size = 'xl' }) => {
	return (
		<div className={styles.wrapper}>
			<button className={cn(styles.button, styles[size])} onClick={onClick}>
				{children}
			</button>
		</div>
	)
}
export default Button
