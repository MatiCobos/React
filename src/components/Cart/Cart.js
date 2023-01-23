import React, { useContext } from 'react'
import { cartContext } from '../CartContext/CartContext'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {
  const {cart, clear} = useContext(cartContext)
  
  return (
    
    cart.map((item)=>{
      return(
        <>
          <ItemCart key={item.id} id={item.id} title={item.title} quantity={item.quantity} price={item.price}/>
        </>
      )
      
    })
  )
  
  
}

export default Cart