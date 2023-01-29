import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase/firebaseConfig';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState ([{}])
    const [loading, setLoading] = useState (true)
    const {itemId} = useParams()
  
    useEffect (()=>{
        const docRef = doc(db, 'products', itemId)

        getDoc(docRef).then(response => {

            const dataProduct = response.data()
            const productAdapted = { id:response.id, ...dataProduct }

            setProductDetail(productAdapted);

        }).catch(error => {
            console.log(error);

        }).finally(()=>{
            setLoading(false)
        })

    }, [itemId])
  
    return (
        <>
            {
                loading?
                <Spinner animation="border" role="status" />
                :
                <ItemDetail {...productDetail}/>
            }
        </>
  )
}

export default ItemDetailContainer