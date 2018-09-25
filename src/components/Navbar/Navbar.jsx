import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min'
import Link from 'gatsby-link'

import './navbar.css'

class NavBar extends Component {
  componentDidMount() {
    //sidenav
    const sideNav = document.querySelector('.sidenav')
    const instance = M.Sidenav.init(sideNav, {})
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="center brand-logo">
              Andre Jarboe
            </a>
          </div>
          <div className="nav-content center">
            <span class="nav-title">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/resume">Resume</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
            </span>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
