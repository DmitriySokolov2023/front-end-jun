import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import { AuthContext } from './context'
import { useAuth } from './hooks/useAuth'
import Router from './routes/Routes'

const { isAuth } = useAuth()

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthContext.Provider value={isAuth}>
			<Router />
		</AuthContext.Provider>
	</React.StrictMode>
)
