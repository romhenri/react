import React from 'react'

const Img = ({ src, borderRadius }) => {
	return (
		<div className="imgContainer">
			<img
				src={src}
				style={{ borderRadius: borderRadius ? borderRadius : '10px' }}
			></img>
		</div>
	)
}

export default Img
