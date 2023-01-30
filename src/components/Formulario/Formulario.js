import React, { useState } from 'react'

const Formulario = ({createOrder}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

  return (
    <>
        <h1>Checkout</h1>
        <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)}></input>
        <input type="text" placeholder="Phone Number" onChange={(e)=> setPhone(e.target.value)}></input>
        <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}></input>
        <button onClick={() => createOrder(name, phone, email)}>Generar Orden</button>
    </>
  )
}

export default Formulario