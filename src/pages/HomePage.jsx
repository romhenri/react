import { Outlet } from 'react-router-dom';
// Sections
import SecStart from '../layout/SecStart';
import SecSlide from '../layout/SecSlide';
import SecStates from '../layout/SecStates';
import SecVDOM from '../layout/SecVDOM';
import SecJSX from '../layout/SecJSX';
import SecFetch from '../layout/SecFetch';
import SecImg from '../layout/SecImg';
import SecData from '../layout/SecData';
import SecCounter from '../layout/SecCounter';
// Components
import Footer from '../components/Footer';

// Componentes Snippet = "rafce"

const HomePage = () => {
	return (
		<main>
			<SecStart />
			<Outlet />
			<SecStates />
			<SecCounter />
			<SecVDOM/>
			<SecJSX />
			<SecFetch />
			<SecSlide />
			<SecImg />
			<SecData />
			<Footer />
		</main>
	)
}

export default HomePage
