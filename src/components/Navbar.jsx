import React from 'react'
import NavButton from './NavButton'

const Navbar = () => {
  return (
    <section className="navbar">
      <nav>
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
    </section>
  )
}

export default Navbar