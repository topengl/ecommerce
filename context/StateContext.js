import React, { createContext,  // Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.
                useContext,     // useContext is a React Hook that lets you read and subscribe to context from your component.
                useState,       // useState is a React Hook that lets you add a state variable to your component.
                useEffect       // useEffect is a React Hook that lets you synchronize a component with an external system.
                } from 'react'; // hooks for logic

import { toast } from 'react-hot-toast'; // Smoking hot React notifications.

const Context =  createContext(); // we call that as a hook

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);    // manage the state to show or not show the cart
  const [cartItems, setCartItems] = useState([]); // we always need to know what items are stored in the cart, it will be filled with data coming from local storage, // needs to be an array so for example .find would work
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1); // in the beginning it is one, but we can change the quantity for each individual item

  // dynamic update funcitons
  // add items to the cart
  const onAdd = (product, quantity) => {
    // check if the product we want to add is already in the cart
    // we loop over all of the cart items (item) for every individual item and we check if the product._id we added is the same as the one of the item._ids in the cart and return that to the variable checkProductInCart
    
    const checkProductInCart = cartItems.find((item) => {
      return(item._id === product._id);
    })

    // increase the quantity and the Total Price of that state
    setTotalPrice((prevTotalPrice) => prevTotalPrice + (product.price * quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    // if the product is in the cart
    if(checkProductInCart)
    {
      // so now we updated the states we need to update the items in the cart:
      // we want to map over our current cart items, we get each individual cartProduct

      const updatedCartItems = cartItems.map((cartProduct) => {
        // we need to grab the product we are trying to change
        if(cartProduct._id === product._id)
        {
          cartProduct.quantity = cartProduct.quantity + quantity;
        }
        return{
          // for each element of the array, we return the changed/ not changed cartProduct
          ...cartProduct
        };
      })
      
      setCartItems([...updatedCartItems]);
    } // if the product is not in the cart, add it to the cart
    else
    {
      // if the product is not in the cart we need to update the product quantity in the cart
      product.quantity = quantity;
      // we update cartItems with an object of the spreaded product with the updated quantity
      setCartItems([...cartItems, {...product}]);
    }
    toast.success(`Added ${qty} ${product.name} to the cart`);
  };
  // remove items 
  const onRemove = (product) => {
    let foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id!== product._id);
    setCartItems([...newCartItems]);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - (foundProduct.price * foundProduct.quantity));
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
  }

  // quantities for Cart and Product page
  const toggleCartItemQuantity = (id, value) => {
    // we get the item from the cartItems array for the specific id
    let foundProduct = cartItems.find((item) => item._id === id);
    if(foundProduct.quantity >=2) // if the found product is 1, then we do not want to decrese -1 to 0, the user then should only be able to delete the item 
    {
      const updatedProducts = cartItems.map((cartProduct) => {
        // we need to grab the product we are trying to change
        if(cartProduct._id === id)
        {
          cartProduct.quantity = cartProduct.quantity + value;
        }
        return{
          // for each element of the array, we return the changed/ not changed cartProduct
          ...cartProduct
        };
      })
      setCartItems([...updatedProducts]);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + value);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + (value * foundProduct.price));
    }
  };
  // incrementing quantities
  const incQty = () => {
    setQty((prevQty) => prevQty +1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if(prevQty-1 < 1) return 1;
      return prevQty -1;
    });
  };

  // create context provider
  // we pass in our children into Context.Provider means we not going to render everything, but we just going to wrap everything with Context.Proiver
  // we pass an object of values to Context Provider
  // to access these values from every single component, we have to go to _app.js
  return(
    <Context.Provider
      value={{
        showCart,
        setShowCart, // set show cart needs to be added to context provider so it can be used in Navbar
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
      }}>
      {children}
    </Context.Provider>
  )
}

// an export function that allows to more easily grab the state
export const useStateContext = () => useContext(Context);

