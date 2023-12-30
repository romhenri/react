import Title from '../components/Title'
import ButtonsLine from '../components/ButtonsLine'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const ErrorPage = () => {
	return (
		<main>
			<section>
				<Title>Erro 404!</Title>
				<p>Esta rota de página não existe ou está escrita incorretamente. Por favor, confira o link acima ou retorne para Home.</p>
				<ButtonsLine>
					<Button
						text="Modo Escuro"
						bg="transparent"
						className="btn-b"
						func="setDarkMode"
					/>
					<Link to="/.">
						<Button text="Retornar para Home" func={'null'} />
					</Link>
				</ButtonsLine>
			</section>
			<Footer/>
		</main>
	)
}

export default ErrorPage
