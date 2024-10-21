import styles from './Input.module.scss'
const Input = ({ placeholder, type, register, name, options, error }) => {
	return (
		<div>
			<input
				placeholder={placeholder}
				type={type}
				className={styles.input}
				{...register(name, options)}
			/>

			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}
export default Input
