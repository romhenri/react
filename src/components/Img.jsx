import React from 'react'

const Img = ({ src, alt, borderRadius }) => {
	return (
		<div className="imgContainer">
			<img
				src={src}
				alt={alt}
				title={alt}
				style={{ borderRadius: borderRadius ? borderRadius : '10px' }}
			></img>
		</div>
	)
}

export default Img
