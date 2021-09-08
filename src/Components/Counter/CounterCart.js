import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';



//falta "AGREGADO" para renderizado condicional de botonera
export const CounterCart= ({prod}) => {


    const {changeQtyInCart} = useContext(CartContext)

 

    return (
        <>
            <div className="d-flex counter-btns-container counter-cart cart-td">
                <button className="mx-1" onClick={ () => changeQtyInCart(prod,'down') }><Dash /></button>
                     <span className="d-flex justify-content-center">
                        {prod.qty}
                     </span>
                <button className="mx-1" onClick={ () => changeQtyInCart(prod,'up') }><Plus /></button>
            </div>
        </>
    )
}


