import { useState } from "react"
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar(){
    const [menuOpen,setMenuOpen]=useState(false);
    return(
       <nav className="navbar">
        <Link to="/" className="navbar-logo">
        <span>SkillPath <span className="gradient-text">AI</span></span>
        </Link>
        <div className={`navbar-links ${ menuOpen ? 'active':'' }`} >
            <NavLink to="/" className={({isActive})=> isActive ? 'navbar-link active' : 'navbar-link'}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? 'navbar-link active' : 'navbar-link'}>About</NavLink>
            <Link to="/login" className="nav-btn-login">Login</Link>
            <Link to="/register" className="nav-btn-register">Register</Link>
        </div>
         <button className="navbar-hamburger" onClick= {() => setMenuOpen (!menuOpen)} > {menuOpen ? 'X' : '☰'} </button>
       </nav>
    )
}
export default Navbar 