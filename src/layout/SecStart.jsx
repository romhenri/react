import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import ButtonsLine from '../components/ButtonsLine'

const SecStart = () => {
	return (
		<section>
			<Title>App React</Title>
			<p>Esta página tem como intuito testar conhecimentos em React.</p>
			<ButtonsLine>
				<Button text="Modo Escuro" bg="transparent" className="btn-b" />
				<Button text="Iniciar" />{' '}
			</ButtonsLine>
		</section>
	)
}

export default SecStart
