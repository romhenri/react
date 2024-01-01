import DataContext from '../context/DataContext';
import { useContext } from 'react';
import { CodeBlock, hybrid, monoBlue } from 'react-code-blocks';
import Title from '../components/Title';

const  SecComponents = () => {
  const {darkMode} = useContext(DataContext);

  const code = `const MyComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  )}
export default MyComponent;`;

  const code2 = `class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    )}}
export default MyComponent;`;

  const code3 = `const MyComponent = () => {
  return ( // Wrong return
    <button>Click me!</button>
    <button>Click me too!</button>
  )}
export default MyComponent;`;

  const code4 = `const MyComponent = () => {
  return (
    <>
      <button>Click me!</button>  
      <button>Click me too!</button>
    </>
  )}
export default MyComponent;`;

  const code5 = `import MyComponent from './MyComponent';
  
const App = () => {
  return (
    <div>
      <MyComponent />
    </div>
  )}; 
  export default App;`;

	return (
		<section>
			<Title>
        Componentes
      </Title>
      <p>
        Em React, componentes são pedaços de código JavaScript (contendo JSX) que podem ser reutilizados e combinados em qualquer lugar da aplicação. Imagine blocos de montar que vão se compondo para formar as interfaces.
      </p>
      <p>
        Componentes podem ser funções ou classes:
      </p>
      <ol>
        <li>
          Um <strong>Componente Funcional</strong> é uma função que retorna elemento JSX. 
        </li>
        <li>
          Um <strong>Componente de Classe</strong> é uma classe que extende a classe <code>React.Component</code> e que retorna elemento JSX.
        </li>
      </ol>
      <p>
        Um componente deve retornar um único elemento JSX!
      </p>
      <hr/>
      <h3>
        Criar Componentes
      </h3>
      <p>
        Para criar um componente funcional, basta criar uma função que retorne código JSX. Por exemplo:
      </p>
      <CodeBlock
        text={code}
        language={'jsx'}
        showLineNumbers={false}
        theme={darkMode ? hybrid : monoBlue}
        wrapLines
      />
      <p>
        Para um componente de classe, basta criar uma classe que extenda <code>React.Component</code> e que retorne JSX. Exemplo:
      </p>
      <CodeBlock
        text={code2}
        language={'jsx'}
        showLineNumbers={false}
        theme={darkMode ? hybrid : monoBlue}
        wrapLines
      />
      <hr/>
      <h3>
        Retorno de Elemento JSX
      </h3>
      <p>
        Um componente deve retornar um único elemento JSX. Por exemplo, o código abaixo não é válido:
      </p>
      <div className="wrong">
        <CodeBlock
          text={code3}
          language={'jsx'}
          showLineNumbers={false}
          theme={darkMode ? hybrid : monoBlue}
          wrapLines
        />
      </div>
      <p>
        Para retornar mais de um elemento JSX, é necessário envolvê-los em um elemento pai ou em um React Fragment. Exemplo:
      </p>
      <CodeBlock
        text={code4}
        language={'jsx'}
        showLineNumbers={false}
        theme={darkMode ? hybrid : monoBlue}
        wrapLines
      />
      <p>
        O React Fragment é uma tag vazia que não é renderizada no DOM.
      </p>
      <hr/>
      <h3>
        Usar Componentes
      </h3>
      <p>
        Para utilizar um componente, basta importá-lo e usá-lo como uma tag HTML. Assim formando uma árvore de componentes, o que chamamos de <strong>Virtual DOM</strong>. Observe o potencial de uma interface declarativa.
      </p>
      <CodeBlock
        text={code5}
        language={'jsx'}
        showLineNumbers={false}
        theme={darkMode ? hybrid : monoBlue}
        wrapLines
      />
		</section>
	)
};

export default SecComponents;