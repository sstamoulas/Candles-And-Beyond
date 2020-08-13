import React from 'react'
import { Link } from "react-router-dom"
import { withRouter } from "react-router";

import './header.styles.scss'

const Header = ({ location }) => (
  <nav className="nav">
    <div className="logo">LOGO</div>
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/" className={`link ${location.pathname === '/' ?'active' : '' }`}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/products" className={`link ${location.pathname === '/products' ?'active' : '' }`}>Products</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className={`link ${location.pathname === '/about' ?'active' : '' }`}>About</Link>
      </li>
    </ul>
  </nav>
)

export default withRouter(Header)
