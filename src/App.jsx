import React from 'react'
// Sections
import SecStart from './layout/SecStart'
import SecForm from './layout/SecForm'
import SecImg from './layout/SecImg'
import SecData from './layout/SecData'
// Components
import Footer from './components/Footer'

// Componentes Snippet = "rafce"

const App = () => {
	return (
		<main>
			<SecStart />
			<SecForm />
			<SecImg />
			<SecData />
			<Footer />
		</main>
	)
}

export default App
