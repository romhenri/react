import Title from '../components/Title';
import { CodeBlock, hybrid } from 'react-code-blocks';

const  SecVDOM = () => {
  const code = `<div>
  <h1>Hi</h1>
  <p>React is awesome</p>
</div>`;

 const code2 = `{
  type: 'div',
  childrens: [
    {
      type: 'h1',
      text: 'Hi'
    },
    {
      type: 'p',
      text: 'React is awesome'
    }
  ]
}`;

	return (
		<>
		<section>
			<Title>
        O que é DOM Virtual? 
      </Title>
      <p>
        O DOM Virtual é uma representação do DOM tradicional do HTML em JavaScript. Com o React, você manipula o Virtual (JavaScript) para ser gerado o Real (HTML). Assim quando há mudanças no DOM Virtual, o mecanismo de comparação vai saber onde atualizar dinâmicamente.
      </p>
      <p>
      <a href="https://codedamn.com/news/reactjs/how-react-works" target="_blank" rel="noopener noreferrer">
          Codedamn (2022):
        </a>
      </p>
			<p>
        &#34;The virtual DOM (or VDOM) is a virtual replica of the actual DOM. It is an object created to resemble the actual DOM. Because it does not write to the screen, the virtual DOM is less expensive to generate than the real DOM.&#34;
      </p>
      <p>
        Exemplo de HTML e sua representação no DOM Virtual:
      </p>
      <CodeBlock
        text={code}
        language="html"
        showLineNumbers={true}
        codeBlock={true}
        theme={hybrid}
      />
      <br />
      <CodeBlock
        text={code2}
        language="jsx"
        showLineNumbers={true}
        codeBlock={true}
        theme={hybrid}
      />
		</section>
		</>
	)
}

export default SecVDOM;