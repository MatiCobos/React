import { useState } from "react";
import { Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {

    const [count, setCount] = useState (1)
    
    const addCount = () => {
        setCount (count + 1)
    }
    const restCount = () => {
        setCount (count - 1)
    }


    return(
        <>
            <Button onClick={restCount} disabled={count == 1}>-</Button>
            {count}
            <Button onClick={addCount} disabled={count == stock}>+</Button>
            <Button onClick={() => onAdd(count)}>Add to cart</Button>  
        </>
    )
}

export default ItemCount