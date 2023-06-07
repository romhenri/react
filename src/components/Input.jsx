import React from 'react'

const Input = ({ label, id, ...props }) => {
	return (
		<>
			<label htmlFor={id}>
				{label}
				<input id={id} type="text" {...props} />
			</label>
		</>
	)
}

export default Input
