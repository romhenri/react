import React from 'react'
import { Outlet } from 'react-router-dom'
// Sections
import SecStart from '../layout/SecStart'
import Navbar from '../components/Navbar'
import SecSlide from '../layout/SecSlide'
import SecButton from '../layout/SecButton'
import SecImg from '../layout/SecImg'
import SecData from '../layout/SecData'
import SecCounter from '../layout/SecCounter'
// Components
import Footer from '../components/Footer'
import styles from '../css/style.css?inline'

// Componentes Snippet = "rafce"

const HomePage = () => {
	return (
		<main>
			<SecStart />
			<Navbar />
			<Outlet />
			<SecCounter />
			<SecSlide />
			<SecButton />
			<SecImg />
			<SecData />
			<Footer />
		</main>
	)
}

export default HomePage
