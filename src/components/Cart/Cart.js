import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { cartContext } from '../CartContext/CartContext'
import CartList from '../CartList/CartList'
import '../Cart/Cart.css'
import { Button } from 'react-bootstrap';

const Cart = () => {
  const {cart, clear, total} = useContext(cartContext)

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
      <p style={{fontSize: "2rem"}}>Total: ${total}</p> 
      <hr/>         
      <Button variant="outline-danger" onClick={clear}>Clear Cart</Button>
      <Link to='/checkout'>
        <Button variant="outline-dark">Checkout</Button>
      </Link>
    </div>
    </>
  )
  
  
}

export default Cart