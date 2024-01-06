import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Section from '../components/Section';
import Title from '../components/Title';
import Flexbox from '../components/Flexbox';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import Loading from '../components/Loading';
import '../css/ContactPage.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      setError("Preencha todos os campos!")
      return
    }
    setLoading(true);

    const serviceID = "service_ne0oufn";
    const templateID = "template_vjo82vy";
    const templateParams = {
      from_name: name + ' - ' + email,
      message: message,
    }
    const publicKey = "xFBAbGm4Q9scA5Rzl";
    // eslint-disable-next-line
    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      alert("Email enviado com sucesso!")
      console.log(`Email enviado com status ${response.status}!`);
      setName('');
      setEmail('');
      setMessage('');
    }, (err) => {
      console.log(err);
    });
    setLoading(false);
    setError('');
  }

  return (
    <main className="contact-page">
      <Section className="contact-section">
        <Title>Contato</Title>
        <p>
          Dúvidas, sugestões ou reclamações? Entre em contato através do formulário abaixo.
        </p>
        <form className="form" onSubmit={sendEmail}>
          <Flexbox>
            <Input 
              label="Nome:"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Flexbox>
          <Flexbox>
            <Input 
              label="Email:"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Flexbox>
          <Flexbox>
            <Textarea 
              label="Mensagem:"
              name="message"
              className="textarea"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />  
          </Flexbox>

          {
            loading && <Loading />
          }

          {error && 
            <p className="error">{error}</p>
          }

          <input 
            type="submit"
            value="Enviar" 
          />
          <Button
            text="Retornar a Home"
            secondary
            className="grow"
            onClick={
              (e) => {
                e.preventDefault();
                navigate('/')
              }}
          />
        </form>
      </Section>
    </main>
  );
}

export default App;
