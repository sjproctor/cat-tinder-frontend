import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component {
  render() {
    return(
      <Nav className="footer-nav">
        <NavItem>
          <NavLink to="/" className="nav-link">
            &copy; 2022 Sarah & Austin & Elyse
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catindex" className="nav-link">
            Meet All the Cats
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew" className="nav-link">
            Add a Cat
          </NavLink>
        </NavItem>
      </Nav>
    )
  }
}
export default Footer
