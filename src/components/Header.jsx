import React from 'react';
import {Link} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';
// import logo from "../assets/tech-icon.png"

const Header = () => {
  return (
    <nav>
      {/* <img src={logo} alt="" /> */}
      <h1>TeachStar</h1>
      <main>
        <HashLink to={"/#home"}>Home </HashLink>
        <Link to={"/contact"}>Contact </Link>
        <HashLink to={"/#about"}>About Us </HashLink>
        <HashLink to={"/#brand"}>Brands </HashLink>
        <Link to={"/service"}>Service </Link>
      </main>
    </nav>
  )
}

export default Header;