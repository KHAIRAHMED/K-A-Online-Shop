import React, { useState } from 'react';
import {NavLink} from "react-router-dom"
import "./Header.css"
import { GiHamburgerMenu } from "react-icons/gi"
const Header = () => {
    const [showMediaIcons , setShowMediaIcons] = useState(false)
    console.log(showMediaIcons)
    return (
        <>
        <nav className="main-nav">
          {/* 1st logo part  */}

          <div className="logo">
            <h2>KA Online-Shop</h2>
          </div>
  
          {/* 2nd menu part  */}
          <div className="hamburger-menu">
              <GiHamburgerMenu onClick={() => setShowMediaIcons(!showMediaIcons)} cursor="pointer"/>
          </div>
          <div
            className={
              showMediaIcons ? "mobile-menu-link" : 
              "menu-link"
            }>
            <ul>
              <li>
                <NavLink style={{textDecoration:"none" , color:"white"}} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration:"none" , color:"white"}} to="/orders">Orders</NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration:"none" , color:"white"}} to="/admin">Admin</NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration:"none" , color:"white"}} to="/drafts">Drafts</NavLink>
              </li>
              <li>
                <NavLink style={{textDecoration:"none" , color:"white"}} to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
           
        </nav>
        </>
    );
};

export default Header;