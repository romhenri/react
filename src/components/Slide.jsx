import {useState, useEffect, useRef} from 'react';
import Section from '../components/Section';
import Button from './Button';
import Title from '../components/Title';
import styles from '../css/Slide.module.css';

const Slide = ({slides}) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const {width} = contentRef.current.getBoundingClientRect();
    setPosition(-((width * active)));
  }, [active])

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <Section className={styles.container}>

      <Title> Slider</Title>

      <div ref={contentRef} className={styles.content}
      style={{transform: `translateX(${position}px)`}}>

        {slides.map(slide => <div key={slide.id} className={styles.item}>{slide.text}</div>)}

      </div>
      <nav className={styles.nav}>
        <Button 
          text='Anterior' 
          onClick={slidePrev} 
          secondary
        />
        <Button 
          text='Próximo' 
          onClick={slideNext}
        />
      </nav>
    </Section>
  )
};

export default Slide;