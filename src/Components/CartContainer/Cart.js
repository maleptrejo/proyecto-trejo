import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Trash } from 'react-bootstrap-icons';

export const Cart = () => {

    const {cart, deleteFromCart, clearCart} = useContext(CartContext)

    return (
        <div>
            
            {
               cart.map(prod=> (
                <div key={prod.item.id}>
                    <h3>{prod.item.nombre}</h3>
                    <p>Cantidad: {prod.qty}</p>
                    <p>Precio: ${prod.item.price * prod.qty}</p>
                    <Trash onClick={() => deleteFromCart(prod.item.id)}/>
                </div>
               ))
               
            }
            {/* <h1>Resumen de compra</h1>
            
            {carrito.map(prod => (
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <p>Cantidad: {prod.cantidad}</p>
                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                    <BsFillTrashFill onClick={() => eliminarDelCarrito(prod.id)}/>
                </div>
            ))}

            <hr/>

            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button> */}
        </div>
    )
}