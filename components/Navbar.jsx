import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'; // that is just a simple shopping icon

import {Cart_jsx} from './';
import {useStateContext} from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Fotovoltaics</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span> {/*The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.*/}
      </button>

      {showCart && <Cart_jsx/>}
      
    </div>
  )
}

export default Navbar;