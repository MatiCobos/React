import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../CartContext/CartContext'
import { db } from '../../service/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const {cart, total, clear} = useContext(cartContext)

    const navigate = useNavigate()

    const createOrder = async () => {

        const objOrder = {
            buyer: {
                name: "matias",
                phone: "12345678",
                email: "matias@hotmail.com"
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
        <h1>Checkout</h1>
        <p></p>
        <button onClick={createOrder}>Generar Orden</button>
    </> 
  )
}

export default Checkout