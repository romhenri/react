import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import ButtonsLine from '../components/ButtonsLine'

const SecStart = () => {
	function setDarkMode () {
		document.body.classList.toggle('dark')
	}

	return (
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
				<Button text="Iniciar" onClick={null}/>
			</ButtonsLine>
		</section>
	)
}

export default SecStart
