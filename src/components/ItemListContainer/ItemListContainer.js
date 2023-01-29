import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import '../ItemListContainer/ItemListContainer.css'
import Spinner from 'react-bootstrap/Spinner';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from "../../service/firebase/firebaseConfig";


const ItemListContainer = ({title}) => {
    
    const [productList, setProductList] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryId} = useParams()

    useEffect (()=>{

        const collectionRef = categoryId? 
        query(collection(db, 'products'), where('category', '==', categoryId))
        : 
        collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productAdapted = response.docs.map(doc => {
                const data = doc.data()

                return {id: doc.id, ...data}
            })

            setProductList(productAdapted);

        }).catch(error => {
            console.log(error);

        }).finally(()=>{
            setLoading(false)
        })

    }, [categoryId])

    return(
        <>
            {
                
                loading?
                    <Spinner animation="border" role="status" />
                :
                <>
                    <h1>{title}</h1>
                    <ItemList  productList={productList}/>
                </>
            }
        </>
    )
}

export default ItemListContainer
