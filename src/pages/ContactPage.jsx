import { useState } from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ButtonsLine from '../components/ButtonsLine'
import Footer from '../components/Footer'
import '../css/ContactPage.css';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos!")
      return
    }

    const serviceID = "service_ne0oufn";
    const templateID = "template_vjo82vy";
    const templateParams = {
      from_name: name + ' - ' + email,
      message: message,
    }
    const publicKey = "xFBAbGm4Q9scA5Rzl";

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      alert("Email enviado com sucesso!")
      console.log(`Email enviado com status ${response.status}!`);
      setName('')
      setEmail('')
      setMessage('')
    }, (err) => {
      console.log(err);
    })
  }

  return (
  <main className='contact-page'>
    <section className=" contact-section">
      <h1 className="title">Contato</h1>
      <form className="form" onSubmit={sendEmail}>
        <input 
          className="input"
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea 
          className="textarea"
          placeholder="Digite sua mensagem..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <input className="button" type="submit" value="Enviar" />

        <ButtonsLine>
        <Link to="/.">
          <Button
            text="Retornar a Home"
            bg="transparent"
            className="btn-b grow"
          />
        </Link>
			</ButtonsLine>
      </form>

    </section>
    <Footer/></main>
  );
}

export default App;
