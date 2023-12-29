import React from 'react';

const Button = ({
	text,
	bg,
	className,
	...props // ...props is the rest of the props
}) => {

	return (
		<button
			style={{ backgroundColor: bg }}
			className={className}
			{...props}
		>
			{text}
		</button>
	)
}

export default Button;
