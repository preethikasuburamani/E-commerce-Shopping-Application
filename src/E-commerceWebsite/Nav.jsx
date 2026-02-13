import React from 'react'
import "./nav.css";
import{Link} from "react-router-dom"
import Header from './Header'
import Products from './Products'
import AboutUs from './AboutUs'
import CountactUS from './CountactUS'
import Home from './Home'

const Nav = () => {
  return (
    <div>
        <nav className='nav'>
            <ul className='nav-list'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Products">products</Link></li>
            <li><Link to="/CountactUs">Contact-Us</Link></li>
            <li><Link to="/AboutUs">AboutUs</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav