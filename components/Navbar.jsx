import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'; // that is just a simple shopping icon

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Fotovoltaics</Link>
      </p>

      <button type="button" className="cart-icon" onClick="">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span> {/*The <span> tag is much like the <div> element, but <div> is a block-level element and <span> is an inline element.*/}
      </button>
    </div>
  )
}

export default Navbar