import React, { useContext } from 'react';
import NameContext from '../context/NameContext';
import './navbar.css'

const Navbar = props =>{
    const context = useContext(NameContext)
    
    return (
        <div className="navbar">
            <p>This is NavBar!</p>
            <p>{context.name}</p>
        </div>
    );

}


export default Navbar;