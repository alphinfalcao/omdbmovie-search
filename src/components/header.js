import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
        <div className="logo">
        <Link to={'/'}>
           <img src="../buycep-logo.png" alt=""/>
           </Link>
        </div>
        <div className="menu">
           <ul>
              <li><a href="/">Login</a></li>
              <li><a href="/">Signup</a></li>
           </ul>
        </div>
      </nav>
    );
  }


export default Header;