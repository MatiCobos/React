import { React, useContext, useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartContext } from "../CartContext/CartContext";

const ItemDetail = ({id, title, text, price, stock, pictureURL}) => {

const [quantity, setQuantity] = useState (0)
const {addItem} = useContext(cartContext)

    useEffect(() => {
        document.title = `Detail ${title}`
    }, [])

    const onAdd = (quantity) => {
        addItem({id, title, price, quantity})
        setQuantity(parseInt(quantity))

        toast.success(`Agregaste ${quantity} ${title}`, {
            position: "bottom-right",
            autoClose: 1500,
        })
    }

    if(stock == 0){
        return(
            <div className="container">
                <div className="imgContainer">
                    <img src={pictureURL} alt="producto"></img>
                </div>

                <div className="text">
                    <h3>{title}</h3>
                    <hr />
                    <p>{text}</p>
                    <p>Price: ${price}</p>
                    <p style={{color: "red"}}><i className="bi bi-exclamation-octagon" style={{color: 'red'}} /> We do not    
                    have stock of this product</p>
                    <p>Product code: {id}</p>
                    <hr />
                </div>
            </div>
        )
    }

    return (  
        <div className="container">
            <div className="imgContainer">
                <img src={pictureURL} alt="producto"></img>
            </div>

            <div className="text">
                <h3>{title}</h3>
                <hr />
                <p>{text}</p>
                <p>Price: ${price}</p>
                <p style={{color: "green"}}><i className="bi bi-check-lg" style={{color: 'green'}} />Available 
                stock: {stock}</p>
                <p>Product code: {id}</p>
                <hr />
                
                {
                    quantity > 0 ?
                        <Link to={"/checkout"}> <Button>Checkout</Button> </Link>
                    :
                    <>
                        <ItemCount initialStock={1} stock={stock} onAdd={onAdd}/> 
                    </>

                }
            </div>
        </div>         
    )
}


export default ItemDetail