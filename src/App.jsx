import React from 'react'
import { Outlet } from 'react-router-dom'
// Sections
import SecStart from './layout/SecStart'
import SecImg from './layout/SecImg'
import SecData from './layout/SecData'
// Components
import Footer from './components/Footer'
import styles from './css/style.css?inline'

// Componentes Snippet = "rafce"

const App = () => {
	return (
		<main>
			<SecStart />
			<Outlet />
			<SecImg />
			<SecData />
			<Footer />
		</main>
	)
}

export default App
