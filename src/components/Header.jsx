import logo_react from '../assets/svg/react.svg';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import style from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to={"/"}>
        <img 
          src={logo_react} 
          className={style.logo}
          style={{width: 50, height: 50}}
          alt="logo"
        />
      </Link>
      
      <nav className={style.navbar}>
        <NavLink 
          to={"/"}
          text={"Início"} 
        />
        <NavLink 
          to={"/about"}
          text={"Sobre"} 
        />
        <NavLink 
          to={"/contact"}
          text={"Contato"} 
        />
      </nav>
    </header>
  )
}

export default Header;