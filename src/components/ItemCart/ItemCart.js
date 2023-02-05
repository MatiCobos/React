import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../CartContext/CartContext'
import '../ItemCart/ItemCart.css'


const ItemCart = ({ id, title, quantity, price }) => {

  const {removeItem} = useContext(cartContext)

  return (
    <>

      <tr>
        <td>{title}</td>
        <td>${price}</td>
        <td>{id}</td>
        <td>{quantity}</td>
        <td>${quantity * price}</td>

      <i className="bi bi-trash3" onClick={() => removeItem(id)}></i>
      </tr>


    </>
  )
}

export default ItemCart