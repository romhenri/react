import Title from '../components/Title';
import styles from '../css/SecInfo.module.css';

const SecStart = () => {
	return (
		<section className={styles.fadeDown}>
			<Title>Sobre esse App</Title>
			<p>Desenvolvido usando:</p>
			<div className={styles.flex}>
				<img align="center" alt="JavaScript" height="54px" width="72px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"/>
				
				<img align="center" alt="HTML" height="54px" width="72px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
			
				<img align="center" alt="CSS" height="54px" width="72px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />

				<img align="center" alt="React.js" height="54" width="72" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
				
				<img align="center" alt="Vite.js" height="54" width="72" src="https://raw.githubusercontent.com/romhenri/romhenri/main/icons/vitejs.svg"/>
			</div>
		</section>
	)
};

export default SecStart;
