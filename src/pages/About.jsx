import React from 'react'
import Section from '../components/Section'
import Title from '../components/Title'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import ButtonsLine from '../components/ButtonsLine'
import Button from '../components/Button'

const About = () => {
	return <main>
		<Section>
			<Title>
					Sobre essa Aplicação Web
			</Title>
			<p>Foi construída para estudar React.</p>
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
		</Section>
		<Footer/>
	</main>
}

export default About
