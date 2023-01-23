import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import './Item.css'
import { Link } from "react-router-dom";

const Item = ({id, price, title, pictureURL, stock, before}) =>{
    return (
        
        <Card  style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={pictureURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{/* <spam className="tachado">${before}</spam>  */}{/* <spam style={{color: "red"}}> */} ${price} {/* </spam> */}</Card.Text>
                    <Link to={`/item/${id}`}>
                        See more
                    </Link>
                
            </Card.Body>
        </Card>
        
    )
}

export default Item;