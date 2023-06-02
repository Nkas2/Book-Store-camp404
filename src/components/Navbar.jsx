import React from "react";
import logo from './../assets/camp404v2.png';
import { Link } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className="navbar navbar-expand-lg bg-light shadow">
         <div className="container">
            <ul className="nav">
               <img src={logo} alt="" style={{height: "40px"}}/>
               <li>
                  <Link to="/" className="nav-link">Beranda</Link>
               </li>
               <li>
                  <Link to="/manajemen-buku" className="nav-link">
                     Manajemen Buku
                  </Link>
               </li>
            </ul> 
         </div>
      </nav>
   )
};

export default Navbar;