import Title from '../components/Title';

const ana = {
	cliente: 'Ana',
	idade: 51,
	compras: [
		{ nome: 'Notebook', preço: 'R$ 2500' },
		{ nome: 'Cama', preço: 'R$ 1000' },
		{ nome: 'Bolsa', preço: 'R$ 300' },
	],
	ativa: true,
};
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
};
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
};

const SecData = () => {
	return (
		<>
			<section>
				<Title>Status de Clientes</Title>
				<p>Nome: {ana.cliente}</p>
				<p>Idade: {ana.idade}</p>
				<p>
					Ativa:
					<span style={{ color: ana.ativa ? 'green' : 'red' }}>
						{ana.ativa ? ' Ativa' : ' Inativa'}
					</span>
				</p>
				<hr />
				<p>Nome: {mario.cliente}</p>
				<p>Idade: {mario.idade}</p>
				<p>
					Ativa:
					<span style={{ color: mario.ativa ? 'green' : 'red' }}>
						{mario.ativa ? ' Ativa' : ' Inativa'}
					</span>
				</p>
				<hr />
				<p>Nome: {luana.cliente}</p>
				<p>Idade: {luana.idade}</p>
				<p>
					Ativa:
					<span style={{ color: luana.ativa ? 'green' : 'red' }}>
						{luana.ativa ? ' Ativa' : ' Inativa'}
					</span>
				</p>
			</section>
		</>
	);
};
export default SecData;
