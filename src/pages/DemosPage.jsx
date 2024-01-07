import { Outlet } from 'react-router-dom';
import SecFetch from '../layout/SecFetch';
import SecFetchProducts from '../layout/SecFetchProducts';
import SecCounter from '../layout/SecCounter';
import SecSlide from '../layout/SecSlide';
import SecAccordion from '../layout/SecAccordion';
import SecImg from '../layout/SecImg';
import SecData from '../layout/SecData';

// Componentes Snippet = "rafce"

const DemosPage = () => {
	return (
		<main>
			<Outlet />
			<SecFetch />
			<SecFetchProducts />
			<SecCounter />
			<SecAccordion />
			<SecSlide />
			<SecImg />
			<SecData />
		</main>
	)
};

export default DemosPage;