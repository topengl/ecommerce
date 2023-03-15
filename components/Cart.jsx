import React, {useRef} from 'react'; // useRef hook
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'; // import icons
import { TiDeleteOutline } from 'react-icons/ti'; // another icon
import toast from 'react-hot-toast'; // pop up messages
import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client'; // import images from Sanity

export const Cart_jsx = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove} = useStateContext(); // we call this as a hook

  return (
    <div className="cart-wrapper" ref={cartRef}> {/*this is our wrapper*/}
      <div className="cart-container">
        <button 
          type="button" // this button has a callback function, which closes our cart
          className="cart-heading"
          onClick={() => setShowCart(false)}>
            <AiOutlineLeft />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {/* What is gonna happen, when we do NOT have items in our cart?*/}
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150}/>
            <h3>Your shopping bag is empty.</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                continue shopping    
              </button>
            </Link>
          </div>
        )}
        {/* What is gonna happen, when we do have items in our cart?*/}
        <div className="product-container">
          {/* we loop through the products*/}
          {/* we render over the cart items with the map property */}
          {/* through each iteration we get the item. each one fo the carItems has an _ id property, item is written in StateContext and origins from onAdd(product, ..)*/}
          {cartItems.length >= 1 && cartItems.map((eachCartItem) => (
            <div className="product" key={eachCartItem._id}> 
              <img src={urlFor(eachCartItem?.image[0])} className="cart-product-image"/>
              <div className="item-desc">
                <div className="flex top">
                  <h5>{eachCartItem.name}</h5>
                  <h4>${eachCartItem.price}</h4>
                </div> 
                <div className="flex bottom">
                  <div>
                    <p className="quantity-desc">
                      <span className="minus" onClick={() => toggleCartItemQuantity(eachCartItem._id,-1)}><AiOutlineMinus /></span>
                      <span className="num">{eachCartItem.quantity}</span> {/* topin: bug if the onClick function stays empty we get an error : TypeError: func.apply is not a function*/}
                      <span className="plus" onClick={() => toggleCartItemQuantity(eachCartItem._id,+1)}><AiOutlinePlus /></span>
                    </p>
                  </div>
                  <button 
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(eachCartItem)}
                  >
                    <TiDeleteOutline/>
                  </button>
                </div>             
              </div>
            </div>
          ))}
          {cartItems.length >= 1&&(
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>${totalPrice}
                </h3>
              </div>
              <div className="btn-container">
                <button type="button" className="btn" onClick="">
                  Pay with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export default Cart_jsx;