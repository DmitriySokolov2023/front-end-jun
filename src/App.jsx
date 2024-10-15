import { BrowserRouter } from 'react-router-dom'
import Layout from './component/layout/Layout'

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<h1>Workout</h1>
			</Layout>
		</BrowserRouter>
	)
}

export default App
