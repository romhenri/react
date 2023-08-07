import React from 'react'
import Title from '../components/Title'
import Flexbox from '../components/Flexbox'
import Input from '../components/Input'
import ButtonsLine from '../components/ButtonsLine'
import Button from '../components/Button'
import {Link, useNavigate} from "react-router-dom";

const SecLogin = () => {
	let navigate = useNavigate();

	function redirect() {
		navigate('/singup');
	}

	return (
		<section>
			<Title>Entrar</Title>
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
					minLength="8"
				/>
			</Flexbox>
			<ButtonsLine>

				<Button text="Não Tenho Conta" bg="transparent" className="btn-b" onClick={redirect} />

				<Button text="Entrar" onClick={null}/>

			</ButtonsLine>
		</section>
	)
}

export default SecLogin
