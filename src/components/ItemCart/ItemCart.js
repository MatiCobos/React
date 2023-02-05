import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../CartContext/CartContext'
import Table from 'react-bootstrap/Table';
import '../ItemCart/ItemCart.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemCart = ({ id, title, quantity, price, pictureURL, stock, onAdd }) => {

  const {cart, clear, total, removeItem} = useContext(cartContext)

  console.log(pictureURL);

  return (
    <>

      <tr>
        <td>{title}</td>
        <td>${price}</td>
        <td>{id}</td>
        <td>{quantity}</td>
        <td>${quantity * price}</td>

      <i class="bi bi-trash3" onClick={() => removeItem(id)}></i>
      </tr>


    </>
  )
}

export default ItemCart