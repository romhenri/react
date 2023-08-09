import React from 'react'
import styles from '../css/Slide.module.css'
import Button from './Button'
import Title from '../components/Title'

const Slide = ({slides}) => {
  const [active, setActive] = React.useState(0)
  const [position, setPosition] = React.useState(0)
  const contentRef = React.useRef()

  React.useEffect(() => {
    const {width} = contentRef.current.getBoundingClientRect()

    setPosition(-((width * active)))

  }, [active])

  function slidePrev() {

    if (active > 0) setActive(active - 1)

  }

  function slideNext() {

    if (active < slides.length - 1) setActive(active + 1)

  }

  return (
    <section className={styles.container}>

      <Title> Slider</Title>

      <div ref={contentRef} className={styles.content}
      style={{transform: `translateX(${position}px)`}}>

        {slides.map(slide => <div key={slide.id} className={styles.item}>{slide.text}</div>)}

      </div>
      <nav className={styles.nav}>

        <Button text='Anterior' onClick={slidePrev} bg="transparent"
					className="btn-b"/>
        <Button text='Próximo' onClick={slideNext}/>

      </nav>
    </section>
  )
}

export default Slide