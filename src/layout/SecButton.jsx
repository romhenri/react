import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import ButtonsLine from '../components/ButtonsLine'

const SecButton = () => {
  const [active, setActive] = React.useState(false)
  const [isTrue, setTrue] = React.useState(false)
  const [isYes, setYes] = React.useState(false)

 function setActiveState() {
  setActive(!active)
 }

 function setTrueState() {
  setTrue(!isTrue)
 }

 function setYesState() {
  setYes(!isYes)
 }

  return (  
    <section>
      <Title>Testes de Estados</Title>
      
      <ButtonsLine>
        <Button text={active ? 'Ativo' : 'Inativo'}
        onClick={setActiveState} className={!active ? "btn-b" : ''} 
        bg={!active ? "transparent" : ''}/>

        <Button text={isTrue ? 'Verdadeiro' : 'Falso'}
        onClick={setTrueState} className={!isTrue ? "btn-b" : ''} 
        bg={!isTrue ? "transparent" : ''}/>

        <Button text={isYes ? 'Sim' : 'Não'}
        onClick={setYesState} className={!isYes ? "btn-b" : ''} 
        bg={!isYes ? "transparent" : ''}/>
      </ButtonsLine>
    </section>
  )
}

export default SecButton