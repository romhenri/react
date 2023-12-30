// Sections
import SecStart from '../layout/SecStart';
import SecStates from '../layout/SecStates';
import SecVDOM from '../layout/SecVDOM';
import SecJSX from '../layout/SecJSX';
import SecCounter from '../layout/SecCounter';
// Components
import Footer from '../components/Footer';

// Componentes Snippet = "rafce"

const HomePage = () => {
	return (
		<main>
			<SecStart />
			<SecStates />
			<SecCounter />
			<SecVDOM/>
			<SecJSX />

			<Footer />
		</main>
	)
}

export default HomePage
