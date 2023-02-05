import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../CartContext/CartContext'
import CartList from '../CartList/CartList'
import '../Cart/Cart.css'
const Cart = () => {
  const {cart, clear, total, removeItem} = useContext(cartContext)

      useEffect(() => {
        document.title = `Cart`
    }, [])

        if(cart == 0){
        return(
          <p>Your bag is empty</p>
        )
    }

  return (
    <>
    <div className='cartContainer'>
      <h1>Your cart</h1>
      <CartList cart={cart}/>
      <p>Total: ${total}</p>         
      <button onClick={clear}>Clear Cart</button>
      <Link to='/checkout'>Checkout</Link>
    </div>
    </>
  )
  
  
}

export default Cart