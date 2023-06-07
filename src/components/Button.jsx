import React from 'react'

const Button = ({ text, bg, className }) => {
	const setDarkMode = () => {
		document.body.classList.toggle('dark')
	}

	return (
		<button
			onClick={setDarkMode}
			style={{ backgroundColor: bg }}
			className={className}
		>
			{text}
		</button>
	)
}

export default Button
