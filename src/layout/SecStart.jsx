import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import ButtonsLine from '../components/ButtonsLine'
import SecInfo from '../layout/SecInfo'

const SecStart = () => {
	const [active, setActive] = React.useState(false)

	function setDarkMode () {
		document.body.classList.toggle('dark')
	}

	function activeSection () {
		document.body.classList.toggle('dark')
	}

	return (
		<>
		<section>
			<Title>App React</Title>
			<p>Esta página tem como intuito testar conhecimentos em React.</p>

			<ButtonsLine>
				<Button
					text="Modo Escuro"
					bg="transparent"
					className="btn-b"
					onClick={setDarkMode}
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
