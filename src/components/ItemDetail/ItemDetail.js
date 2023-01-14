import { React, useState } from "react";
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({title, text, price, stock, productCode, pictureURL}) => {

const [quantity, setQuantity] = useState (0)

const onAdd = (quantity) => {
    setQuantity(parseInt(quantity))
    console.log(`Agregue ${quantity} ${title}`);
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
                    <ItemCount initialStock={1} stock={stock} onAdd={onAdd}/> 
                }
                    
            </ListGroup>
            <Card.Body>

            </Card.Body>
        </Card>
            
         
    )
}


export default ItemDetail