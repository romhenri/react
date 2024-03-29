import Section from './Section';
import NavButton from './NavButton';
import style from '../css/Header.module.css';

const Navbar = () => {
  return (
    <Section>
      <nav className={style.navbar}>
        <p>Navegue:</p>

        <NavButton text={"About"}
          to={"/about"}
        />

        <NavButton text={"Contact"}
          to={"/contact"}
        />

        <NavButton text={"Error"}
          to={"/error"}
        />
      </nav>
    </Section>
  )
};

export default Navbar;