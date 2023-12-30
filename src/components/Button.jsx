const Button = ({
	text,
	bg = '#2f61e9',
	className = '',
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
};

export default Button;
