import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState ([])
  
    useEffect (()=>{

            let products = [
            {id: 1, title: "Home Shirt", before: 70, price: 60, pictureURL: "/homeShirt.jpg", stock: 5, text: "To celebrate being EFL Champions be a part of this momentous occasion with a limited edition Champions 21/22 Fulham FC", productCode: "ADT-697087" },
            {id: 2, title: "Away Shirt", before: 70, price: 60, pictureURL: "/awayShirt.jpg", stock: 6, text:"To celebrate being EFL Champions be a part of this momentous occasion with a limited edition Champions 21/22 Fulham FC", productCode: "VSD-55607" },
            {id: 3, title: "Jacket", before: 200, price: 150, pictureURL: "/jacket.jpg", stock: 7, text: "Condivo Light Padded Jacket", productCode: "TYG-5938496" },
            {id: 4, title: "Sweat Pants", before: 120, price: 100, pictureURL: "/sweatPants.jpg", stock: 8, text: "Tiro 21 Sweat Pants", productCode: "IAF-67494869" },
            {id: 5, title: "Training Polo", before: 100, price: 75, pictureURL: "trainingPolo.jpg", stock: 9, text: "Tiro 21 Polo Shirt", productCode: "HSL-54954056" },
            {id: 6, title: "Walkout Jacket", before: 200, price: 170, pictureURL: "walkoutJacket.jpg", stock: 10, text: "Innovation Logo FFC Tech Hybrid Mid Layer Jacket.", productCode: "SL-49I5067" },
        ];

        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(products)
            }, 2000)
        }).then((res)=>{
            setProductDetail(res)
        })      

    }, [])
  
    return (
        <ItemDetail productDetail={productDetail}/>
  )
}

export default ItemDetailContainer