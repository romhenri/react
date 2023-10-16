import React from 'react'
import styles from './css/style.css?inline'
// Componentes Snippet = "rafce"
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Contact from './pages/ContactPage'
import HomePage from './pages/HomePage'
import SecSingup from './layout/SecSingup'
import SecLogin from './layout/SecLogin'

const App = () => {
	return (
		<main>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage/>}>
						<Route path='/' element={<SecSingup />}/>
						<Route path='/singup' element={<SecSingup />}/>
						<Route path='/login' element={<SecLogin />}/>
					</Route>
					<Route path='about' element={<About/>}/>
					<Route path='contact' element={<Contact/>}/>
					<Route path='error' element={<ErrorPage/>}/>
					<Route path='*' element={<ErrorPage/>}/>
				</Routes>
			</Router>
		</main>
	)
}

export default App
