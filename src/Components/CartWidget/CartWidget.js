import React, { useContext } from 'react';
import { Basket2Fill } from 'react-bootstrap-icons';
import { CartContext } from '../../Context/CartContext';

const CartWidget = ()=> {
    const {cart} = useContext(CartContext)

    

    return (
        
            <div className="d-flex align-items-center cart-qty-container" style={{visibility: cart.length<1 ? 'hidden' : 'visible'}}>
                <Basket2Fill />
                <span className="cart-qty">{cart.length}</span>
            </div>
        
    )
}

export default CartWidget;