import 'bootstrap-icons/font/bootstrap-icons.css';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = ({totalQuantity}) => {
    
    return (
        <>
        <Link to={"cart"}>
            <i className="bi bi-cart3" ></i>
            {totalQuantity}
        </Link>
        </>
    )
}

export default CartWidget;