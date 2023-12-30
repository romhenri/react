import { useState, useEffect, useContext } from 'react'
import DataContext from '../context/DataContext'
import Section from '../components/Section'
import Title from '../components/Title'
import Footer from '../components/Footer'
import { Link, Outlet } from 'react-router-dom'
import ButtonsLine from '../components/ButtonsLine'
import Button from '../components/Button'

const About = () => {
	const {darkMode, setDarkMode} = useContext(DataContext);
 
	useEffect(() => {
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode])

	return <>
		<main>
		<Section>
			<Title>
					Sobre essa Aplicação Web
			</Title>
			<p>Foi construída para estudar React. Em cada seção busquei explorar diferentes funcionalidades do React.</p>
			<ButtonsLine>
					<Button
						text={
							darkMode ? "Modo Claro" : "Modo Escuro"
						}
						bg="transparent"
						className="btn-b"
						onClick={() => {
							setDarkMode(!darkMode);
						}}
					/>
					<Link to="/.">
						<Button text="Retornar para Home" func={'null'} />
					</Link>
				</ButtonsLine>
		</Section>
		</main>
		<Outlet/>
		<Footer/>
		
	</>
}

export default About
