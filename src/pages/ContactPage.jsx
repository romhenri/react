import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';
import '../css/ContactPage.css';
import Loading from '../components/Loading';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
  <>
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

          {
            loading && <Loading />
          }

          {error && 
            <p className="error">{error}</p>
          }

          <input className="button" type="submit" value="Enviar" />

          <Link to="/.">
            <Button
              text="Retornar a Home"
              bg="transparent"
              className="btn-b grow"
            />
          </Link>
        </form>

      </section>
    </main>
    <Footer/>
  </>
  );
}

export default App;
