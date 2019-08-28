import React, { useState } from "react"
import propTypes from "prop-types"
import "./styles.sass"
//import "./debug.css"
import { Link } from "gatsby"
import logo from "../../static/img/logo.png"


const Layout = ({ children }) => {

  const [burgerMenuState, toggleBurgerMenu] = useState("navbar-menu")
    
  return (
    <div>
      <nav className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to={`/`}>
            <img src={logo} width="150" height="50"></img>
          </Link>
          <a 
            role="button" 
            className="navbar-burger" 
            aria-label="menu" 
            aria-expanded="false"
            onClick={() => toggleBurgerMenu(
              burgerMenuState === "navbar-menu" ? "navbar-menu is-active" : "navbar-menu" 
            )}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={burgerMenuState}>
          <div className="navbar-start">
            <div className="navbar-item">
              <Link className="navbar-item" to={`/about/`}>
                About
              </Link>
            </div>
            
            <Link className="navbar-item" to={`/events/`}>
              Events
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="button is-black" to={`/contact/`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        
       
      </nav>
      <div className="nav-spacer"></div>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: propTypes.oneOfType([
    propTypes.arrayOf(propTypes.node),
    propTypes.node
  ]).isRequired
}

export default Layout