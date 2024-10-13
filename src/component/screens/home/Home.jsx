import { useState } from 'react'
import styles from './home.module.scss'
const Home = () => {
	const [count, setCount] = useState(0)
	return (
		<div className={styles.home}>
			<h2>Home</h2>
			<button onClick={() => setCount(count + 1)}>Click</button>
			<p>Count {count}</p>
		</div>
	)
}
export default Home
