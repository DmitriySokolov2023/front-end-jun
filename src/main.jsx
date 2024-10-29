import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.scss'
import AuthProvider from './providers/AuthProvider'
import Router from './routes/Routes'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})
createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
