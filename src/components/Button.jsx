import React from 'react'

const Button = ({ text, bg, className, func }) => {
	const setDarkMode = () => {
		document.body.classList.toggle('dark')
	}

	const handleClick = () => {
		if (func === 'setDarkMode') {
			setDarkMode()

		} else if (func == 'null') {
			return

		} else {
			console.log('Botão sem função!')
		}
	}

	return (
		<button
			onClick={handleClick}
			style={{ backgroundColor: bg }}
			className={className}
		>
			{text}
		</button>
	)
}

export default Button
