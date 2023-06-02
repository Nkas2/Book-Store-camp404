import React from "react";
import logo from './../assets/camp404v2.png';

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg bg-light shadow">
         <div className="container">
            <ul className="nav">
               <img src={logo} alt="" style={{height: "40px"}}/>
               <li>
                  <a href="/" className="nav-link">Beranda</a>
               </li>
               <li>
                  <a href="/manajemen" className="nav-link">
                     Manajemen Buku Men
                  </a>
               </li>
            </ul> 
         </div>
      </nav>
   )
};

export default Navbar;