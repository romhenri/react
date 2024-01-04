import { Outlet } from 'react-router-dom';
import SecFetch from '../layout/SecFetch';
import SecSlide from '../layout/SecSlide';
import Accordion from '../components/Accordion';
import SecImg from '../layout/SecImg';
import SecData from '../layout/SecData';

// Componentes Snippet = "rafce"

const DemosPage = () => {
	return (
		<main>
			<Outlet />
			<SecFetch />
			<Accordion
				title="Accordion 1">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</Accordion>
			<Accordion
				title="Accordion 2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</Accordion>
			<Accordion
				title="Accordion 3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
			</Accordion>
			<SecSlide />
			<SecImg />
			<SecData />
		</main>
	)
};

export default DemosPage;