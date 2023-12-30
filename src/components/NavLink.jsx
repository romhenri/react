import { NavLink as RouterNavLink} from 'react-router-dom';
import style from '../css/Header.module.css';

const NavLink = (
  { to, text }
) => {
  return (
    <RouterNavLink
      to={to}
    >
      <div className={style.navlink}>
        {text}
      </div>
    </RouterNavLink>
  )
};

export default NavLink;