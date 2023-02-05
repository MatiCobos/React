import React from 'react'
import ItemCart from '../ItemCart/ItemCart'
import Table from 'react-bootstrap/Table';
import '../CartList/CartList.css'



const CartList = ({cart}) => {
  return(
    <>
    <Table striped bordered hover>
      <thead className='theadContainer'>

        <tbody>
          <th>Product</th>
          <th>Price</th>
          <th>Product ID</th>
          <th>Quantity</th>
          <th>Sub total</th>
          <th>Remove</th>                
        {
          cart.map ((item)=>{
            return(
              <ItemCart key={item.id} {...item}/>
            )
          })
        }
        </tbody>
      </thead>
    </Table>

    </>
  )

}

export default CartList