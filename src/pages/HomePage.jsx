import React from 'react'
import { Outlet } from 'react-router-dom'
// Sections
import SecStart from '../layout/SecStart'
import Navbar from '../components/Navbar'
import SecSlide from '../layout/SecSlide'
import SecStates from '../layout/SecStates'
import SecFetch from '../layout/SecFetch'
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
			<SecStates />
			<SecCounter />
			<SecFetch />
			<SecSlide />
			<SecImg />
			<SecData />
			<Footer />
		</main>
	)
}

export default HomePage
