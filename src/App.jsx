import React from 'react'
// Sections
import SecStart from './layout/SecStart'
import SecData from './layout/SecData'
import SecForm from './layout/SecForm'
// Components
import Footer from './components/Footer'

// Componentes Snippet = "rafce"

const App = () => {
	return (
		<main>
			<SecStart />
			<SecForm />
			<SecData />
			<Footer />
		</main>
	)
}

export default App
