import Section from '../components/Section';
import Title from '../components/Title';
import Flexbox from '../components/Flexbox';
import Input from '../components/Input';
import ButtonsLine from '../components/ButtonsLine';
import Button from '../components/Button';
import DataContext from '../context/DataContext';
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";

const SecSingup = () => {
	const {setAccount} = useContext(DataContext);

	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordAgain, setPasswordAgain] = useState('');
	const [error, setError] = useState('');

	const navigate = useNavigate();
	function redirect() {navigate('/login');}

	function isValidEmail(email) {
		// Checks if includes @
		if ( !email.includes("@") ) {
			return false;
		}
		const user = email.substring(0, email.indexOf("@"));
		const domain = email.substring(email.indexOf("@")+ 1, email.length);
		
		if ((user.length >=1) && // Exists name
			(domain.length >=3) && // Exists domain
			(user.search("@")==-1) && // Not exists another @
			(domain.search("@")==-1) && // Not exists another @
			(user.search(" ")==-1) && // Not exists spaces
			(domain.search(" ")==-1) && // Not exists spaces
			(domain.search(".")!=-1) && // Exists dot
			(domain.indexOf(".") >=1)&& // Exists domain name
			(domain.lastIndexOf(".") < domain.length - 1)) {
			return true;
		} else {
			return false;
		}
	}

	function clear() {
		setName('');
		setLastName('');
		setEmail('');
		setPassword('');
		setPasswordAgain('');

		const inputs = document.querySelectorAll('input');
		inputs.forEach(input => input.value = '');
	}

	const submit = () => {
		if (
			!name ||
			!lastName ||
			!email ||
			!password ||
			!passwordAgain
		) {
			setError('Preencha todos os campos');
			return;
		}
		else if (
			!(password === passwordAgain)
			) {
			setError('As senhas não coincidem!');
			return;
		} 
		else if ( 
			password.length < 8
		) {
			setError('A senha precisa ter um no mínimo 8 caracteres!');
			return;
		}
		else if (
			isValidEmail(email) === false
		) {
			setError('O email não é válido!');
			return;
		}
		else {
			setError('');
			const data = {
				name,
				lastName,
				email,
				password
			}
			setAccount(data);
			clear();
		}
	}

	return (
		<Section>
			<Title>Cadastre-se</Title>

			<Flexbox className="flexItem">
				<Input
					type="text"
					label="Primeiro Nome:"
					id="inputName"
					placeholder="Alan"
					required
					minLength="8"
					autoComplete="on"
					onChange={e => setName(e.target.value)}
				/>
				<Input
					type="text"
					label="Último Nome:"
					id="inputLastName"
					placeholder="Turing"
					required
					minLength="8"
					autoComplete="on"
					onChange={e => setLastName(e.target.value)}
				/>
			</Flexbox>

			<Flexbox className="flexItem">
				<Input
					type="email"
					label="Email:"
					id="inputEmail"
					placeholder="seu.email@gmail.com"
					required
					autoComplete="on"
					onChange={e => setEmail(e.target.value)}
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
					onChange={e => setPassword(e.target.value)}
				/>
				<Input
					type="password"
					label="Senha Novamente:"
					id="inputPasswordAgain"
					placeholder="Mínimo de 8 caracteres"
					required
					minLength="8"
					onChange={e => setPasswordAgain(e.target.value)}
				/>
			</Flexbox>

			{
				error && <p className="error">{error}</p>
			}

			<ButtonsLine>
				<Button 
					text="Já Tenho Conta" 
					secondary 
					onClick={redirect}
				/>
				<Button 
					text="Entrar"
					onClick={submit}
				/>
			</ButtonsLine>
		</Section>
	)
};

export default SecSingup;
