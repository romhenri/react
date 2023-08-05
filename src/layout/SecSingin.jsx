import React from 'react'
import Title from '../components/Title'
import Flexbox from '../components/Flexbox'
import Input from '../components/Input'
import ButtonsLine from '../components/ButtonsLine'
import Button from '../components/Button'
import {Link} from "react-router-dom";

const SecSingin = () => {
	return (
		<section>
			<Title>Cadastre-se</Title>

			<Flexbox className="flexItem">
				<Input
					type="text"
					label="Primeiro Nome:"
					id="inputName"
					placeholder="Alan"
					required
				/>
				<Input
					type="text"
					label="Último Nome:"
					id="inputLastName"
					placeholder="Turing"
					required
					minLength="8"
				/>
			</Flexbox>

			<Flexbox className="flexItem">
				<Input
					type="email"
					label="Email:"
					id="inputEmail"
					placeholder="seu.email@gmail.com"
					required
				/>
			</Flexbox>

			<Flexbox className="flexItem">
			<Input
					type="password"
					label="Senha:"
					id="inputPassword"
					placeholder="Mínimo de 8 caracteres"
					required
					minLength="8"
				/>
				<Input
					type="password"
					label="Senha Novamente:"
					id="inputPasswordAgain"
					placeholder="Mínimo de 8 caracteres"
					required
					minLength="8"
				/>
			</Flexbox>

			<ButtonsLine>

				<Link to={'/login'}>
					<Button text="Já Tenho Conta" bg="transparent" className="btn-b" func={'null'} />
				</Link>
				
				<Button text="Entrar" func={'null'}/>
			</ButtonsLine>
		</section>
	)
}

export default SecSingin
