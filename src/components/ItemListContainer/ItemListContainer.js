import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({title}) => {

    const [productList, setProductList] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryId} = useParams()

    useEffect (()=>{
        
        let products = [
            {id: 1, title: "Home Shirt", before: 70, price: 60, pictureURL: "/homeShirt.jpg", category: "shirt", stock: 5 },
            {id: 2, title: "Away Shirt", before: 70, price: 60, pictureURL: "/awayShirt.jpg", category: "shirt", stock: 6 },
            {id: 3, title: "Jacket", before: 200, price: 150, pictureURL: "/jacket.jpg", category: "jacket", stock: 7 },
            {id: 4, title: "Sweat Pants", before: 120, price: 100, pictureURL: "/sweatPants.jpg", category:"pants", stock: 8 },
            {id: 5, title: "Training Polo", before: 100, price: 75, pictureURL: "trainingPolo.jpg", category:"polo", stock: 9 },
            {id: 6, title: "Walkout Jacket", before: 200, price: 170, pictureURL: "walkoutJacket.jpg", category:"jacket", stock: 10},
        ];

        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        }).then((res)=>{
            categoryId?
                setProductList(res.filter((item)=> item.category === categoryId))
                :
                setProductList(res)
                setLoading(false)
        })

    }, [categoryId])

    return(
        <>
        {loading?
        <h1>Loading products...</h1>
        :
        <ItemList  productList={productList}/>
        }
        </>
    )
}

export default ItemListContainer
