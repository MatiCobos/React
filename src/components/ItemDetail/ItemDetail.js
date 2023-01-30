import { React, useContext, useEffect, useState } from "react";
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartContext } from "../CartContext/CartContext";

const ItemDetail = ({id, title, text, price, stock, productCode, pictureURL}) => {

const [quantity, setQuantity] = useState (0)
const {addItem, isInCart} = useContext(cartContext)

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

  return (  
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>${price}</ListGroup.Item>
                <ListGroup.Item>Stock: {stock}</ListGroup.Item>
                <ListGroup.Item><u>Produc Code:</u> {productCode}</ListGroup.Item>
                
                {
                    quantity > 0 ? 
                    <Link to={"/cart"}> Checkout </Link>
                    :
                    <>
                        <ItemCount initialStock={1} stock={stock} onAdd={onAdd}/> 
                    </>
                }
                    
            </ListGroup>
            <Card.Body>
                
            </Card.Body>
            <ToastContainer />
        </Card>
            
         
    )
}


export default ItemDetail