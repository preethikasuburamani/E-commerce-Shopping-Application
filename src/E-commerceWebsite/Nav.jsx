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
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/CountactUs">ContactUs</Link></li>
            <li><Link to="/AboutUs">About</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav