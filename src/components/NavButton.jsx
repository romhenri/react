import { NavLink } from 'react-router-dom';
import style from '../css/Header.module.css';

const NavButton = ({to, text}) => {
  return (
    <NavLink to={to}> 
      <button className={style.navbutton}>
        {text}
      </button>
    </NavLink>
  )
};

export default NavButton;