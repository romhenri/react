// Sections
import SecStart from '../layout/SecStart';
import SecJSX from '../layout/SecJSX';
import SecComponents from '../layout/SecComponents';
import SecVDOM from '../layout/SecVDOM';
import SecCompArch from '../layout/SecCompArch';
import SecStates from '../layout/SecStates';
import SecHooks from "../layout/SecHooks";
import SecContext from '../layout/SecContext';

// Componentes Snippet = "rafce"

const HomePage = () => {
	return (
		<main>
			<SecStart />
			<SecJSX />
			<SecComponents />	
			<SecVDOM/>
			<SecCompArch />
			<SecStates />
			<SecHooks />
			<SecContext />
		</main>
	)
}

export default HomePage
