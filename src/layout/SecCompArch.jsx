import Section from '../components/Section';
import Title from '../components/Title';

const  SecCompArch = () => {
	return (
		<Section>
			<Title>
        Arquitetura de Componentes
      </Title>
      <p>
        Na programação temos o Princípio da Responsabilidade Única (SRP), no contexto de React, isso pode ser aplicado aos componentes para a seguinte arquitetura:
      </p>
      <ol>
        <li>
          Componentes Básicos: Cada um apenas uma responsabilidade simples e reutilizável.
          <br />
          Como: Botão, Input, Card ou Texto.
        </li>
        <br />
        <li>
          Componentes Compostos: Composição de dois ou mais componentes básicos para formar uma peça.
          <br />
          Como: Formulário, Menu, Tabela ou Modal.
        </li>
        <br />
        <li>
          Seções: Composição de componentes compostos ou básicos para formar uma seção, um pedaço da página.
          <br />
          Como: Header, Footer, Sidebar ou Hero.
        </li>
        <br />
        <li>
          Páginas: Composição de seções, componentes compostos ou básicos para formar uma página.
          <br />
          Como: Home, Login, Cadastro ou Checkout.
        </li>
      </ol>
      <p>
        A arquitetura se baseia na Hierarquia de Nível, onde cada componente pode conter  outros de nível inferior, mas não superior.
      </p>
      <ul>
        <li>
          Componentes básicos não podem conter outros componentes.
        </li>
        <br />
        <li>
          Componentes compostos podem conter componentes básicos e outros componentes compostos.
        </li>
        <br />
        <li>
          Seções podem conter componentes básicos e componentes compostos.
        </li>
        <br />
        <li>
          Páginas podem conter todos inferiores, mas o ideal é que contenha apenas ou majoritariamente seções para manter a organização.
        </li>
      </ul>
      <hr />
      <h3>
        Atom Design
      </h3>
      <p>
        O Atom Design é uma metodologia de desenvolvimento que segue uma arquitetura semelhante:
      </p>
      <ol>
        <li>
          Átomos: Componentes básicos.
          <br />
          Como: Button, Input, Card ou Texto.
        </li>
        <br />
        <li>
          Moléculas: Composição de dois ou mais átomos.
          <br />
          Como: Input com Label, Button com Icon ou Card com Image.
        </li>
        <br />
        <li>
          Organismos: Composição de duas ou mais moléculas.
          <br />
          Como: Formulário, Menu, Tabela ou Modal.
        </li>
        <br />
        <li>
          Templates: Composição de dois ou mais organismos.
          <br />
          Como: Header, Footer, Sidebar ou Hero.
        </li>
        <br />
        <li>
          Páginas: Composição de dois ou mais templates.
          <br />
          Como: Home, Login, Cadastro ou Checkout.
        </li>
      </ol>
      <p>
        Mais sobre Atom Design: <a href="https://bradfrost.com/blog/post/atomic-web-design/">https://bradfrost.com/blog/post/atomic-web-design/</a>
      </p>
      <hr />
      <h3>
        MVC
      </h3>
      <p>
        MVC é um padrão de arquitetura de software que divide a aplicação em três camadas:
      </p>
      <ol>
        <li>
          Model: Responsável pela manipulação dos dados.
        </li>
        <br />
        <li>
          View: Responsável pela apresentação dos dados.
        </li>
        <br />
        <li>
          Controller: Responsável pela lógica de negócio.
        </li>
      </ol>
      <p>
        No React, o Model e o Controller são representados pelos componentes, enquanto a View é representada pelo JSX.
      </p>
		</Section>
	)
};

export default SecCompArch;