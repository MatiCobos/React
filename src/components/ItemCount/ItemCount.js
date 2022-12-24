import { useState } from "react";
import { Button } from 'react-bootstrap';

const ItemCount = ({maxStock}) => {

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
            <p>{count}</p>
            <Button onClick={addCount} disabled={count == maxStock}>+</Button>
        </>
    )
}

export default ItemCount