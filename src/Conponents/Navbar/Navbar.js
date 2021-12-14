import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu  } from "react-icons/gi"

import "./Navbar.css"
import { contextApi } from '../../App';
import { signOut } from 'firebase/auth';
import { auth } from '../Login/firebase.config';

const Navbar = () => {
const [showMediaIcons , setShowMediaIcons] = useState(false)
const [isLoggedIn , setLoggedIn] = useContext(contextApi)

const handleSignOut = ()=>{
    if(isLoggedIn?.email){
        signOut(auth)
    }
}

    return (
        <nav className="navbar">
            <h3 className="logo">K-A Online Shop</h3>
            <ul className={showMediaIcons?"mobile-menu": "navLinks"}
            onClick={()=> setShowMediaIcons(false)}
            >
                <Link to="/" className="home">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/orders" className="orders">
                    <li>
                    Orders
                    </li>
                </Link>
                <Link to="/admin" className="admin">
                    <li>
                    Admin
                    </li>
                </Link>
                <Link to="/drafts" className="drafts">
                    <li>
                    Drafts
                    </li>
                </Link>
                <Link to="/login" className="login">
                    <li onClick={handleSignOut}>
                    {isLoggedIn?.email?"Sign Out" : "Login"}
                    </li>
                </Link>
            </ul>
            <GiHamburgerMenu onClick={()=> setShowMediaIcons(!showMediaIcons)} className="mobile-menu-icon" />
        </nav>
    );
};

export default Navbar;