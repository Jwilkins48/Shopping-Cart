import React from 'react'
import { Link } from "react-router-dom";
import logo from '../components/daisy.png'

function Header({cartAmount}) {

  return (
    <div className='header'>
      <div className='titleContainer'>
        <Link to='/' className='title'>Daisy's Design</Link><img className='logo' src={logo} alt='flower icon' width="58" height="58"></img>
      </div>
      <div className='linkContainer'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkOut">Check Out {cartAmount}</Link>
      </div>
    </div>
  )
}

export default Header
