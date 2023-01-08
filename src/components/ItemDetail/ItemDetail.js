import React from "react";
import {Card, ListGroup } from 'react-bootstrap';
import './ItemDetail.css'

const ItemDetail = ({productDetail}) => {
  return (
        productDetail.map ((item) =>{
            return (    
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.pictureURL} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>${item.price}</ListGroup.Item>
                    <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
                    <ListGroup.Item><u>Produc Code:</u> {item.productCode}</ListGroup.Item>
                </ListGroup>
                <Card.Body>

                </Card.Body>
            </Card>
            )
        })    
    )
}


export default ItemDetail