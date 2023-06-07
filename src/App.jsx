import React from 'react'
import Button from './components/Button'
import Footer from './components/Footer'

// Componentes Snippet = "rafce"

const SecStart = () => {
	return (
		<section>
			<h1>App React</h1> <hr />
			<p>Iniciando e testando o ambiente.</p>
			<Button text="Modo Escuro" bg="transparent" className="btn-b" />
			<Button text="Iniciar" />
		</section>
	)
}

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
			<h1>Status de Clientes</h1> <hr />
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

const App = () => {
	return (
		<main>
			<SecStart />
			<SecData />
			<Footer />
		</main>
	)
}

export default App
