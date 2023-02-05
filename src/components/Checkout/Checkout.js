import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import React from 'react'
import { useContext, useEffect } from 'react'
import { cartContext } from '../CartContext/CartContext'
import { db } from '../../service/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import Formulario from '../Formulario/Formulario'
import '../Checkout/Checkout.css'

const Checkout = () => {

    useEffect(() => {
        document.title = `Checkout`
    }, [])

    const {cart, total, clear} = useContext(cartContext)

    const navigate = useNavigate()

    const createOrder = async (name, phone, email) => {

        const objOrder = {
            buyer: {
                name,
                phone,
                email,
            },
            items: cart,
            total
        }

        const batch = writeBatch(db)

        const ids = cart.map(prod => prod.id)
        console.log(ids);

        const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

        const productsAddedToCartFromFirestore = await getDocs(productsRef)
        const { docs } = productsAddedToCartFromFirestore

        const outOfStock = []

        docs.forEach(doc => {
            const dataDoc = doc.data()
            const stockDb = dataDoc.stock

            const productAddedToCart = cart.find(prod => prod.id === doc.id)
            const prodQuantity = productAddedToCart.quantity

            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock: stockDb - prodQuantity})
            }
            else{
                outOfStock.push({ id: doc.id, ...dataDoc })
            }
        })

        if(outOfStock.length === 0){
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            const {id} = orderAdded
            clear()

            setTimeout(()=>{
                navigate('/')
            }, 3000)

            console.log(id);
        }
    }

    if(cart.length === 0){
        return(
            <p>No hay productos en el carrito</p>
        )
    }

  return (
    <>
    <div className='formContainer'>
        <h1>Form Checkout</h1>
        <Formulario createOrder={createOrder} />
    </div>      
    </> 
  )
}

export default Checkout