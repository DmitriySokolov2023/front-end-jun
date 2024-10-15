import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import About from '../component/screens/about/About'
import Home from '../component/screens/home/Home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: 'about',
		element: <About />
	}
])
