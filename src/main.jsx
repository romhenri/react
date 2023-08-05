import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import App from './App'
import ErrorPage from './pages/ErrorPage'
import SecSingin from './layout/SecSingin'
import SecLogin from './layout/SecLogin'
import About from './pages/About'
import FormPage from './pages/FormPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <SecLogin />,
			},
			{
				path: '/singin',
				element: <SecSingin />,
			},
			{
				path: '/login',
				element: <SecLogin />,
			},
		]
	},
	{
		path: 'about',
		element: <About />,
	},
	{
		path: 'error',
		element: <ErrorPage />,
	}
])

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
