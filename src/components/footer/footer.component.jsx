import React from 'react'
import { Link } from "react-router-dom"

import './footer.styles.scss'

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <article className="footer-col-headers">
        <h5 className="title">Home</h5>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link">About</Link>
          </li>
        </ul>
      </article>
      <article className="footer-col-headers">
        <h5 className="title">About</h5>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link">About</Link>
          </li>
        </ul>
      </article>
      <article className="footer-col-headers">
        <h5 className="title">Products</h5>
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/" className="link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="link">Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="link">About</Link>
          </li>
        </ul>
      </article>
    </div>
    <div className="reserved">© 2020 Candles & Beyond</div>
  </footer>
)

export default Footer
