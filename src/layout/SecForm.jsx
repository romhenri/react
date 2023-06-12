import React from 'react'
import Title from '../components/Title'
import Flexbox from '../components/Flexbox'
import Input from '../components/Input'
import ButtonsLine from '../components/ButtonsLine'
import Button from '../components/Button'

const SecForm = () => {
	return (
		<section>
			<Title>Formulário</Title>
			<Flexbox>
				<Input
					type="email"
					label="Email:"
					id="inputEmail"
					placeholder="seu.email@gmail.com"
					required
				/>
				<Input
					type="password"
					label="Senha:"
					id="inputPassword"
					placeholder="Mínimo de 8 caracteres"
					required
					minlength="8"
				/>
			</Flexbox>
			<ButtonsLine>
				<Button text="Registrar" bg="transparent" className="btn-b" />
				<Button text="Entrar" />
			</ButtonsLine>
		</section>
	)
}

export default SecForm
