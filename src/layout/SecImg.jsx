import React, { useState } from 'react'
import Title from '../components/Title'
import Img from '../components/Img'
import styles from '../css/style.css'

import pathImg from '../assets/img/292030_20220314153108_1.png'
// import pathImg1 from '../assets/img/292030_20220305083107_1.png'
import pathArrowLeft from '../assets/svg/arrow-left-solid.svg'

const SecImg = () => {
	const [indexImg, setIndexImg] = useState(0)
	const [img, setImg] = useState(pathImg)

	// var img = indexImg

	const reloadImage = () => {
		if (indexImg == 0) {
			setImg(pathImg)
		} else if (indexImg == 1) {
			setImg(pathImg1)
		}
	}

	const nextImage = () => {
		if (indexImg == 1) {
			setIndexImg(0)
		} else {
			setIndexImg(indexImg + 1)
		}

		setImg(pathImg1)
		reloadImage()
	}

	const prevImage = () => {
		if (indexImg == 0) {
			setIndexImg(1)
		} else {
			setIndexImg(indexImg - 1)
		}
		reloadImage()
	}

	// function prevImage() {
	// 	--indexImg
	// }

	return (
		<section>
			<Title>Imagens</Title>
			<div className="imgBox">
				<aside onClick={prevImage} alt="Mudar">
					<img src={pathArrowLeft} alt="Mudar" />
					{indexImg + 1}
				</aside>
				<Img
					src={img}
					alt={'Geralt de Rívia em regiões gélidas.' + indexImg}
				/>
				{img}
				<aside className="right" onClick={nextImage}>
					<img src={pathArrowLeft} alt="Mudar" />
				</aside>
			</div>
		</section>
	)
}

export default SecImg
