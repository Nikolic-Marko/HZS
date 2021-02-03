import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/" style={{ padding: '1rem' }}>
          {/* STYLE JE SAMO PRIVREMENO */}
          HOME
        </NavLink>
        <NavLink to="/forum">FORUM</NavLink>
      </div>
    )
  }
}

export default Header
