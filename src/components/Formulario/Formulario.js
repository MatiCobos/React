import React, { useState } from 'react'
import '../Formulario/Formulario.css'
import { Button } from 'react-bootstrap';


const Formulario = ({createOrder}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    return(
      <>
        <div className='inputContainer'>
          <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)}></input>
          <input type="text" placeholder="Phone Number" onChange={(e)=> setPhone(e.target.value)}></input>
          <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}></input>
          <Button className='btnCheckout' variant="outline-dark" onClick={() => createOrder(name, phone, email)}>Generate order</Button>
        </div>
      </>
    );
  
}

export default Formulario