import React from "react";
import Item from "../Item/Item";
import './ItemList.css'
import { Container, Row } from "react-bootstrap";

const ItemList = ({productList}) => {
    return(
        <Container>
            <Row>
                
                {
                    productList.map ((item)=>{
                        return(
                            <Item key={item.id} id={item.id} title={item.title} before={item.before} price={item.price} pictureURL={item.pictureURL} stock={item.stock}/>
                        )
                    })
                }
                
            </Row>
        </Container>  
    )  
};

export default ItemList