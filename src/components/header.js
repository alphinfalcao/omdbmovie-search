import React from "react";


function Header() {
    return (
        <nav>
        <div className="logo">
           <img src="../buycep-logo.png" alt=""/>
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