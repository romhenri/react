import { useState, useEffect, useContext } from 'react'
import DataContext from '../context/DataContext'
import Title from '../components/Title'
import Button from '../components/Button'
import ButtonsLine from '../components/ButtonsLine'
import SecInfo from '../layout/SecInfo'

const SecStart = () => {
	const [active, setActive] = useState(false)
	const {darkMode, setDarkMode} = useContext(DataContext);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode])

	return (
		<>
		<section>
			<Title>App React</Title>
			<p>Esta página tem como intuito testar conhecimentos em React.</p>

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
				<Button text={active? "Saber Menos" : "Saber Mais"}
				onClick={() => {setActive(!active)}}/>
			</ButtonsLine>
		</section>
		{active && <SecInfo />}
		</>
	)
}

export default SecStart
