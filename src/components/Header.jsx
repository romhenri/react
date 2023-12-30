import logo_react from '../assets/svg/react.svg';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import style from '../css/Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Link className={style.logoname} 
      to={"/"}>
        <img 
          src={logo_react} 
          className={style.logo}
          style={{width: 50, height: 50}}
          loading="eager"
          alt="logo"
        />

        <h1 className={style.title}>
          React App
        </h1>
      </Link>
      
      <nav className={style.navbar}>
        <NavLink 
          to={"/"}
          text={"Home"} 
        />
        <NavLink 
          to={"/demos"}
          text={"Demos"} 
        />
        <NavLink 
          to={"/contact"}
          text={"Contato"} 
        />
      </nav>
    </header>
  )
};

export default Header;