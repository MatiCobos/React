import React, { createContext, useState } from 'react'

export const cartContext = createContext()


const CartContext = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (/*item, quantity*/productToAdd) => {
    //agregar cierta cantidad de un item al carrito
    //setList ([...list, {...item, quantity}])
    if (!isInCart(productToAdd.id)) {
      setCart(prev => {
        console.log(prev);
        return [...prev, productToAdd]
      })
    } else {
      console.error("ya esta")
    }
  }


  const removeItem = (id) => {
    const cartUpdated = cart.filter(prod => prod.id !== id)
    setCart(cartUpdated)
  }

  const clear = () => {
    //Remover todos los item
    setCart([])
  }

  const isInCart = (id) => cart.some(prod => id === prod.id)

  const getTotalQuantity = () => {
    let accu = 0

    cart.forEach(prod =>{
      accu += prod.quantity
    })
    return accu
  }

  const getTotal = () => {
    let total = 0

    cart.forEach(prod => {
      total += prod.quantity * prod.price
    })
    return total
  }

  const totalQuantity = getTotalQuantity()
  console.log(totalQuantity);

  const total = getTotal()
  return (
    <div>
      <cartContext.Provider value={{ addItem, isInCart, clear, totalQuantity, cart, total, removeItem /*list*/ }} >
        {children}
      </cartContext.Provider></div>
  )
}

export default CartContext;