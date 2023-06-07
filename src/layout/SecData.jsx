import React from 'react'
import Title from '../components/Title'

const luana = {
	cliente: 'Luana',
	idade: 27,
	compras: [
		{ nome: 'Notebook', preço: 'R$ 2500' },
		{ nome: 'Geladeira', preço: 'R$ 3000' },
		{ nome: 'Smartphone', preço: 'R$ 1500' },
		{ nome: 'Guitarra', preço: 'R$ 3500' },
	],
	ativa: false,
}

const mario = {
	cliente: 'Mario',
	idade: 31,
	compras: [
		{ nome: 'Notebook', preço: 'R$ 2500' },
		{ nome: 'Geladeira', preço: 'R$ 3000' },
		{ nome: 'Smartphone', preço: 'R$ 1500' },
		{ nome: 'Guitarra', preço: 'R$ 3500' },
	],
	ativa: true,
}

const SecData = () => {
	const dados = mario
	const total = dados.compras.map((item) =>
		Number(item.preço.replace('R$ ', ''))
	)

	return (
		<section>
			<Title>Status de Clientes</Title>
			<p>Nome: {dados.cliente}</p>
			<p>Idade: {dados.idade}</p>
			<p>
				Ativa:
				<span style={{ color: dados.ativa ? 'green' : 'red' }}>
					{dados.ativa ? ' Ativa' : ' Inativa'}
				</span>
			</p>
		</section>
	)
}
export default SecData
