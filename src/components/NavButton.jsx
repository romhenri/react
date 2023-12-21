import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../css/Navbar.module.css'

const NavButton = ({to, text}) => {
  return (
    <NavLink to={to}> 
      <button className={style.nav_button}>
        {text}
      </button>
    </NavLink>
  )
}

export default NavButton