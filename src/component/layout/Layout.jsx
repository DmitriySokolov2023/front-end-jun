import cn from 'clsx'
import Header from './header/Header'
import styles from './Layout.module.scss'
const Layout = ({ children, bgImage, heading = '', backLink = '/' }) => {
	return (
		<section
			className={cn(styles.wrapper, {
				[styles.otherPage]: !!heading
			})}
		>
			<Header backLink={backLink} />
			{heading && <div className={styles.heading}>{heading}</div>}

			{children && <div>{children}</div>}
		</section>
	)
}
export default Layout
