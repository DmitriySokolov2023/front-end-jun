import styles from './Input.module.scss'

const Input = ({
	placeholder = 'text',
	type = 'text',
	onChange,
	value = ''
}) => {
	return (
		<input
			className={styles.input}
			placeholder={placeholder}
			value={value}
			type={type}
			onChange={e => onChange(e)}
		/>
	)
}
export default Input
