// Sections
import SecStart from '../layout/SecStart';
import SecVDOM from '../layout/SecVDOM';
import SecJSX from '../layout/SecJSX';
import SecHooks from "../layout/SecHooks";
import SecStates from '../layout/SecStates';
import SecCounter from '../layout/SecCounter';
// Components
import Footer from '../components/Footer';

// Componentes Snippet = "rafce"

const HomePage = () => {
	return (
		<main>
			<SecStart />
			<SecJSX />
			<SecVDOM/>
			<SecStates />
			<SecHooks />
			<SecCounter />

			<Footer />
		</main>
	)
}

export default HomePage
