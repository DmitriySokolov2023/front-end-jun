import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from '../component/screens/not-fount/not-found'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'

const Router = () => {
	const { isAuth } = useAuth(false)
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.auth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
export default Router
