import React from 'react'
import Title from '../components/Title'
import Flexbox from '../components/Flexbox'
import Input from '../components/Input'

const SecForm = () => {
	return (
		<section>
			<Title>Formulário</Title>
			<Flexbox>
				<Input label="Email:" id="inputEmail" required />
				<Input label="Senha:" id="inputPassword" required />
			</Flexbox>
		</section>
	)
}

export default SecForm
