import { Outlet } from 'react-router-dom';
import SecFetch from '../layout/SecFetch';
import SecSlide from '../layout/SecSlide';
import SecImg from '../layout/SecImg';
import SecData from '../layout/SecData';

// Componentes Snippet = "rafce"

const DemosPage = () => {
	return (
		<main>
			<Outlet />
			<SecFetch />
			<SecSlide />
			<SecImg />
			<SecData />
		</main>
	)
}

export default DemosPage;