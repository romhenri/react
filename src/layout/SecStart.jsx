import { useState, useEffect, useContext } from 'react';
import DataContext from '../context/DataContext';
import Title from '../components/Title';
import Button from '../components/Button';
import ButtonsLine from '../components/ButtonsLine';
import SecInfo from '../layout/SecInfo';

const SecStart = () => {
	const [active, setActive] = useState(false);
	const {darkMode, setDarkMode} = useContext(DataContext);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

	return (
		<>
		<section>
			<Title>Sobre esse App</Title>
			<p>
				O intuito desta aplicação é aprender, testar e praticar React.js. Aqui você encontra anotações/resumos sobre conceitos dessa biblioteca tão poderosa.
				Em &quot;Demos&quot;, você encontra exemplos de componentes interessantes e úteis de serem feitos em React. 
			</p>
			<p>
				Se quiser saber sobre o desenvolvimento dessa aplicação, clique em  &quot;Saber Mais&quot;
			</p>

			<ButtonsLine>
				<Button
					text={
						darkMode ? "Modo Claro" : "Modo Escuro"
					}
					bg="transparent"
					className="btn-b"
					onClick={() => {
						setDarkMode(!darkMode);
					}}
				/>
				<Button text={active? "Fechar" : "Saber Mais"}
				onClick={() => {setActive(!active)}}/>
			</ButtonsLine>
		</section>
		{active && <SecInfo />}
		</>
	)
};

export default SecStart;
