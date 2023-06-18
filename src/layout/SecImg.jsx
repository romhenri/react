import React from 'react'
import Title from '../components/Title'
import Img from '../components/Img'

import pathImg from '../assets/img/292030_20220314153108_1.png'
import pathImg1 from '../assets/img/292030_20220305083107_1.png'
import pathArrowLeft from '../assets/svg/arrow-left-solid.svg'

var indexImg = 0

if (indexImg == 0) {
	var img = pathImg
} else {
	var img = pathImg1
}

const SecImg = () => {
	function nextImage() {
		++indexImg
	}

	function prevImage() {
		--indexImg
	}

	return (
		<section>
			<Title>Imagens</Title>
			<div className="imgBox">
				<aside onClick={prevImage()}>
					<img src={pathArrowLeft} alt="Mudar" />
				</aside>
				<Img src={img} alt={'Geralt de Rívia em regiões gélidas.'} />
				<aside className="right" onClick={nextImage()}>
					<img src={pathArrowLeft} alt="Mudar" />
				</aside>
			</div>
		</section>
	)
}

export default SecImg
