import React from 'react'
import Title from '../components/Title'
import Img from '../components/Img'

import pathImg from '../assets/img/292030_20220314153108_1.png'

const SecImg = () => {
	return (
		<section>
			<Title>Imagens</Title>
			<Img src={pathImg} alt={'Geralt de Rívia em regiões gélidas.'} />
		</section>
	)
}

export default SecImg
