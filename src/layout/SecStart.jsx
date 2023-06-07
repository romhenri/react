import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'

const SecStart = () => {
	return (
		<section>
			<Title>App React</Title>
			<p>Esta página tem como intuito testar conhecimentos em React.</p>
			<Button text="Modo Escuro" bg="transparent" className="btn-b" />
			<Button text="Iniciar" />
		</section>
	)
}

export default SecStart
