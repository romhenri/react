import DataContext from '../context/DataContext';
import { useContext } from 'react';
import { CodeBlock, hybrid, monoBlue } from 'react-code-blocks';
import Section from '../components/Section';
import Title from '../components/Title';

const  SecHooks = () => {
  const {darkMode} = useContext(DataContext);

  const code = `useEffect(() => {
  // Code
}, [dependencies]);`;

  const code2 = `useLayoutEffect(() => {
  // Code
}, [dependencies]);`;

	return (
		<Section>
			<Title>
        Hooks
      </Title>
      <p>
        Hooks são funções especiais do React que podem ser usadas dentro de componentes funcionais para lidar com estado, ciclo de vida e outros recursos que envolvem o funcionamento do React. Alguns dos principais:
      </p>
      <hr />
      <h3>useState</h3>
      <p>
        O useState é um hook que permite adicionar estado a componentes funcionais. Ele recebe um parâmetro que é o estado inicial e retorna um array com o estado atual e uma função para atualizar esse estado.
      </p>
      <CodeBlock
        text={`const [state, setState] = useState("initialState");`}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <hr />
      <h3>useEffect</h3>
      <p>
        O useEffect é um hook que permite executar efeitos colaterais quando determinado estado for alterado. Ele recebe dois parâmetros: uma função de callback que será executada quando o estado for alterado e um array de dependências que, quando alterado, irá executar a função de callback.
      </p>
      <CodeBlock
        text={code}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <hr />
      <h3>useLayoutEffect</h3>
      <p>
        O useLayoutEffect é um hook que funciona de forma semelhante ao useEffect, porém, ele é síncrono e é executado antes do componente ser renderizado.
      </p>
      <CodeBlock
        text={code2}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <hr />
      <h3>useRef</h3>
      <p>
        O useRef é um hook que permite criar referências a elementos do DOM. Ele retorna um objeto com a propriedade current que, por sua vez, aponta para o elemento do DOM.
      </p>
      <CodeBlock
        text={`const ref = useRef();`}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <br />
      <CodeBlock
        text={`<input ref={ref} />`}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <hr />
      <h3>useContext</h3>
      <p>
        O useContext é um hook que permite acessar o contexto da aplicação. Ele recebe como parâmetro o contexto criado com o createContext e retorna o valor atual do contexto.
      </p>
      <CodeBlock
        text={`const value = useContext(DataContext);`}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <hr />
      <h3>useMemo</h3>
      <p>
        O useMemo é um hook que permite memorizar, ou seja, agrupar valores para que ao serem alterados, não sejam recriados. Uma forma de otimizar o desempenho da aplicação.
      </p>
      <CodeBlock
        text={`const value = useMemo(() => {/* Code*/}, [dependencies]);`}
        language="javascript"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
		</Section>
	)
};

export default SecHooks;