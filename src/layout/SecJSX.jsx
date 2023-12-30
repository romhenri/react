import DataContext from '../context/DataContext'
import { useContext } from 'react';
import { CodeBlock, hybrid, monoBlue } from 'react-code-blocks';
import Title from '../components/Title';

const  SecJSX = () => {
  const {darkMode} = useContext(DataContext);

  const code = `<div className="container">
    <p>React is awesome</p> {/* JSX */} 
</div>`;

 const code2 = `React.createElement( "div", { className: "container" }, 
  React.createElement( "p", null,
    "React is awesome"
    )
  );`;

  const code3 = `<div class="container">
    <p>React is awesome</p> <!--HTML-->
</div>`;

  const code4 = `React.createElement( element, props, children );`;

	return (
		<section>
			<Title>
        O que JSX? 
      </Title>

      <p>
        JSX (JavaScript XML) é uma sintaxe para escrever HTML dentro do JavaScript, mas não é JavaScript puro. São transpiladores (pré-processadores) como o Babel, que transformam o JSX em JavaScript puro, para que o navegador possa entender e manipular HTML.
      </p>

      <p>
        Sendo assim, JSX possui muitas propiedades HTML com nomes diferentes para evitar conflitos com palavras reservadas do JavaScript, como por exemplo: <code>class</code> é substituído por <code>className</code> e <code>for</code> é substituído por <code>htmlFor</code>.
      </p>

      <p>
        Exemplo de JSX, JavaScript processado e HTML gerado:
      </p>

      <CodeBlock
        text={code}
        language="jsx"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <br />

      <CodeBlock
        text={code2}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <br />

      <CodeBlock
        text={code3}
        language="html"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />

      <p>
        Como podem obeservar, a funcão <code>React.createElement()</code> é chamada para criar um elemento HTML. Os parâmetros:
      </p>

      <CodeBlock
        text={code4}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />

      <ol>
        <li>Nome do elemento HTML.</li>
        <li>Objeto de propriedades.</li>
        <li>Children do elemento.</li>
      </ol>

      <p>
        Como visto no exemplo, a children de um elemento pode ser outro elemento ou um texto.
      </p>

		</section>
	)
}

export default SecJSX;