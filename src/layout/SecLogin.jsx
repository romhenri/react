import React from 'react'
import Title from '../components/Title'
import Flexbox from '../components/Flexbox'
import Input from '../components/Input'
import ButtonsLine from '../components/ButtonsLine'
import Button from '../components/Button'
import style from '../css/style.css'
import {Link} from "react-router-dom";

const SecLogin = () => {
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

				<Link to={'/singin'}>
					<Button text="Não Tenho Conta" bg="transparent" className="btn-b" func={'null'} />
				</Link>

				<Button text="Entrar" func={'null'}/>

			</ButtonsLine>
		</section>
	)
}

export default SecLogin
