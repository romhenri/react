const Input = ({
	type,
	label,
	id = '',
	...props
 }) => {
	return (
		<>
			<label htmlFor={id}>
				{label}
				<input
					id={id}
					type={type ? type : 'text'}
					{...props}
				/>
			</label>
		</>
	)
};

export default Input;
