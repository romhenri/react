import {useState} from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import ButtonsLine from '../components/ButtonsLine';

const SecStates = () => {
  const [active, setActive] = useState(false);
  const [isTrue, setTrue] = useState(false);
  const [isYes, setYes] = useState(false);

  return (  
    <section>
      <Title>Estados</Title>

      <p>
        O conceito de estado tem como base o conceito de variável mas possui diferenças relacionadas ao funcionamento do React. Exemplos:
      </p>
      <ol>
        <li>
          Estados são armezanados entre renderizações;
        </li>
        <li>
          Estados são alterados de forma assíncrona;
        </li>
        <li>
          Um componente é re-renderizado quando um estado que ele usa é alterado;
        </li>
        <li>
          Estados são atualizados na interface automaticamente devido a re-renderização.
        </li>
      </ol>
      <p>
        As variáveis comuns:
      </p>
      <ol>
        <li>
          São recalculadas a cada renderização;
        </li>
        <li>
          São alteradas de forma síncrona;
        </li>
        <li>
          Não causam re-renderizações de componentes após alteração;
        </li>
        <li>
          Precisam ser atualizadas na interface manualmente em caso de mudança.
        </li>
      </ol>
      <p>
        Teste esses estados booleanos:
      </p>
      
      <ButtonsLine>
        <Button 
          text={active ? 'Ativo' : 'Inativo'}
          className={!active ? "btn-b" : ''} 
          bg={!active ? "transparent" : ''}
          onClick={()=>{setActive(!active)}} 
        />

        <Button 
          text={isTrue ? 'Verdadeiro' : 'Falso'}
          className={!isTrue ? "btn-b" : ''} 
          bg={!isTrue ? "transparent" : ''}
          onClick={()=>{setTrue(!isTrue)}} 
        />

        <Button 
          text={isYes ? 'Sim' : 'Não'}
          className={!isYes ? "btn-b" : ''} 
          bg={!isYes ? "transparent" : ''}
          onClick={()=>{setYes(!isYes)}} 
        />
      </ButtonsLine>
    </section>
  );
};

export default SecStates;