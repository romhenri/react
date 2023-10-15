import React from 'react'
// Components
import styles from './css/style.css?inline'

// Componentes Snippet = "rafce"

import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About'
import Contact from './pages/ContactPage'
import HomePage from './pages/HomePage'

const App = () => {
	return (
		<main>
			<Router>
				<Routes>
					<Route path='/' element={<HomePage/>}/>
					<Route path='about' element={<About/>}/>
					<Route path='store' element={<About/>}/>
					<Route path='contact' element={<Contact/>}/>
					<Route path='error' element={<ErrorPage/>}/>
					<Route path='*' element={<ErrorPage/>}/>
				</Routes>
			</Router>
		</main>
	)
}

export default App
