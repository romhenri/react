import DataContext from '../context/DataContext';
import { useContext } from 'react';
import { CodeBlock, hybrid, monoBlue } from 'react-code-blocks';
import Section from '../components/Section';
import Title from '../components/Title';

const  SecContext = () => {
  const {darkMode} = useContext(DataContext);

  const code = `import { createContext, useState } from 'react';

const DataContext = createContext(null);

export const DataContextProvider = ( {children} ) => {
  const [darkMode, setDarkMode] = useState(true);

  const value = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};`

const code2 = `import { DataContextProvider } from './context/DataContext';

const App = () => {
  return (
    <DataContextProvider>
      {/* Componentes */}
    </DataContextProvider>
  );
};`

const code3 = `import { useContext } from 'react'; 
import DataContext from '../context/DataContext';

const Component = () => {
  const {darkMode} = useContext(DataContext);
  return (
    <div>
      <p>Dark Mode: {darkMode}</p>
    </div>
  );
};`

	return (
		<Section>
			<Title>
        Contexto 
      </Title>

      <p>
        O contexto é uma forma de compartilhar dados entre componentes, sem precisar passar manualmente props entre todos os níveis da árvore de componentes.
      </p>
      <p>
        A prática de passar props entre componentes é chamada de <strong>prop drilling</strong> e pode ser um problema em aplicações grandes, pois torna o código mais complexo e difícil de manter.
      </p>
      <p>
        Assim se cria um contexto:
      </p>
      <CodeBlock
        text={code}
        language="jsx"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <p>
        Para usar um contexto, é preciso envolver a aplicação em um <strong>Provider</strong>:
      </p>
      <CodeBlock
        text={code2}
        language="jsx"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <p>
        Assim se acessa informações de um contexto:
      </p>
      <CodeBlock
        text={code3}
        language="jsx"
        showLineNumbers={true}
        codeBlock={true}
        theme={darkMode ? hybrid : monoBlue}
      />
      <p>
        Ideias de uso de contexto:
      </p>
      <ul>
        <li>Temas (Dark | Light);</li>
        <li>Autenticação;</li>
        <li>Informações do usuário;</li>
        <li>Informações de produtos.</li>
      </ul>
		</Section>
	)
};

export default SecContext;