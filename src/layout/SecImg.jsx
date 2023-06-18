import React, { useState } from 'react'
import Title from '../components/Title'
import Img from '../components/Img'
import styles from '../css/style.css'

import pathImg from '../assets/img/292030_20220314153108_1.png'
import pathImg1 from '../assets/img/292030_20220305083107_1.png'
import pathArrowLeft from '../assets/svg/arrow-left-solid.svg'

const SecImg = () => {
	const [indexImg, setIndexImg] = useState(0)
	const [whatImg, setWhatImg] = useState(pathImg)

	// var img = indexImg

	const reloadImage = () => {
		if (indexImg == 1) {
			setWhatImg(pathImg)
		} else if (indexImg == 0) {
			setWhatImg(pathImg1)
		}
	}

	const nextImage = () => {
		if (indexImg == 1) {
			setIndexImg(0)
		} else {
			setIndexImg(indexImg + 1)
		}

		// setWhatImg(pathImg1)
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
					src={whatImg}
					alt={'Geralt de Rívia em regiões gélidas.'}
				/>
				<aside className="right" onClick={nextImage}>
					<img src={pathArrowLeft} alt="Mudar" />
				</aside>
			</div>
		</section>
	)
}

export default SecImg
