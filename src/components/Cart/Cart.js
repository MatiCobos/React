import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {
  const {cart, clear, total} = useContext(cartContext)

      useEffect(() => {
        document.title = `Cart`
    }, [])

  return (
    <div>
      <h1>Cart</h1>
      
      {
        cart.map((item)=>{
          return(
            <ItemCart key={item.id} id={item.id} title={item.title} quantity={item.quantity} price={item.price}/>
          ) 
        })
      }      
      <button onClick={clear}>Clear Cart</button>
      <Link to='/checkout'>Checkout</Link>
    </div>
  )
  
  
}

export default Cart