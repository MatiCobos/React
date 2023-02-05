import React from "react";
import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const Item = ({id, price, title, pictureURL, stock, before}) =>{
    return (
        
        <Card  style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={pictureURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{/* <spam className="tachado">${before}</spam>  */}{/* <spam style={{color: "red"}}> */} ${price} {/* </spam> */}</Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button variant="outline-dark">See more</Button>
                    </Link>
                
            </Card.Body>
        </Card>
        
    )
}

export default Item;