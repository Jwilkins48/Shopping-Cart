import React from 'react'
import { Link } from "react-router-dom";
import logo from '../components/daisy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

function Header({cartAmount}) {
  const element = <FontAwesomeIcon icon={faBasketShopping} />

  return (
    <div className='header'>
      <div className='titleContainer'>
        <Link to='/' className='title'>Daisy's Design</Link><img className='logo' src={logo} alt='flower icon' width="58" height="58"></img>
      </div>
      <div className='linkContainer'>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkOut">{element} <span className='cartAmountDisplay'>{cartAmount}</span></Link>
      </div>
    </div>
  )
}

export default Header
