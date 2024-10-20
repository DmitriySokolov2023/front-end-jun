import styles from './Form.module.scss'

const Form = ({ children }) => {
	return <form className={styles.form}>{children}</form>
}
export default Form
