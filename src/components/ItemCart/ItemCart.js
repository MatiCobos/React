import React from 'react'

const ItemCart = ({id, title, quantity}) => {


  return (
    <>
    <div>{title} {id} {quantity}</div>
    </>
  )
}

export default ItemCart