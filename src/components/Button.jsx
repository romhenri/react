const Button = ({
	text,
	secondary,
	className = '',
	...props // ...props is the rest of the props
}) => {

	return (
		<button
			className={
				className + ' ' +
				(secondary ? 'btn-b' : 'btn-a')
			}
			{...props}
		>
			{text}
		</button>
	)
};

export default Button;
