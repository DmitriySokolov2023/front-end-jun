import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import { useAuth } from './hooks/useAuth'
import Router from './routes/Routes'

const { isAuth } = useAuth()

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
)
