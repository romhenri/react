import { useState } from 'react';
import Section from '../components/Section';
import Title from '../components/Title';
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonsLine from '../components/ButtonsLine';
import Loading from '../components/Loading';

const SecFetch = () => {
	const [CEP, setCEP] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [uf, setUf] = useState('');
	const [ddd, setDdd] = useState('');

	function clearData() {
		setStreet('');
		setCity('');
		setUf('');
		setDdd('');
	}

	const fecthDataCEP = () => {
		if (CEP === '') {
			clearData();
			setError('Digite um CEP!');
			return;
		}
		if (!(CEP.length === 8)) {
			clearData();
			setError(
				'CEP inválido! Todo CEP deve conter 8 dígitos.'
			);
			return;
		}
		setLoading(true);

		const url = `https://viacep.com.br/ws/${CEP}/json/`;

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (data.erro) {
					clearData();
					setError('CEP não encontrado!');
					return;
				}
				// console.log(data);
				setStreet(data.logradouro);
				setCity(data.localidade);
				setUf(data.uf);
				setDdd(data.ddd);
			})
			.catch(() => {
				setError('CEP não encontrado!');
			}).finally(() => {
				setLoading(false);
			});
		// console.log('CEP: ', CEP);
	}

	return (
		<>
		<Section>
			<Title>Fetch Data</Title>
			<p>
				Fecth em uma API de Buscar CEP:
			</p>

			<hr />

				{street && 
					<p>
						<strong>Rua:</strong> {street}
					</p>
				}

				{city &&
					<p>
					<strong>Cidade:</strong> {city} - {uf}
					</p>
				}

				{ddd &&
					<p>
					<strong>DDD:</strong> {ddd}
					</p>
				}

				{
					loading && <Loading />
				}

			<hr />

			<Input
				type="number"
				label="CEP:"
				id="inputCEP"
				placeholder="00000-000"
				onChange={
					(e) => {
						setCEP(e.target.value);
						setError('');
					}
				}
				required
			/>

			{error &&
				<p className="error">
					{error}
				</p> 
			}

			<ButtonsLine>
				<Button 
					text={'Buscar CEP'}
					onClick={fecthDataCEP}
				/>
			</ButtonsLine>
		</Section>
		</>
	)
};

export default SecFetch;
