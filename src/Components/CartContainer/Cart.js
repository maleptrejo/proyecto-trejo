import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Trash } from 'react-bootstrap-icons';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';
import { CounterCart } from '../Counter/CounterCart';

import Table from 'react-bootstrap/Table';

export const Cart = () => {

    const {cart, deleteFromCart, clearCart, totalInCart} = useContext(CartContext)

    return (
     
    <>
        {
            cart.length<1
            ? <div>
                    <div className="d-flex justify-content-center m-5">
                        <h4>Su carrito se encuentra vacío</h4>
                    </div>
                    <div>
                            <Link to={`/`}>
                                <div className="d-flex flex-row justify-content-center">
                                    <p><ArrowLeft /></p>
                                    <p className="mx-3">Comenzar a comprar</p>
                                </div>
                            </Link>
                    </div>
            </div>
            : 
            <div>
            <Table responsive>
                     <thead>
                         <tr>
                        
                           <th><span>Cantidad</span></th>
                           <th>Producto</th>
                           <th>Precio</th>
                           <th><span className="d-flex justify-content-center align-items-center">Remover</span></th>
                           <th>Total</th>
                           
                         </tr>
                     </thead>
                     <tbody>
                        
                 {
                     cart.map(prod=> (
                        
                         <tr key={prod.item.id}>
                            <td className="p-3"><CounterCart  prod={prod}/></td>
                            <td>
                                <div className="d-flex cart-td w-75 justify-content-between cart-img">
                                     <Figure>
                                         <Figure.Image
                                           width={71}
                                           height={80}
                                           alt="71x80"
                                           src={prod.item.img}
                                         />
                                     </Figure>
                                    <div>
                                         <span>{prod.item.name}</span>
                                    </div>
                                </div>
                             </td>
                             <td><div className="cart-td">${prod.item.price}</div></td>
                             <td><div className="cart-td d-flex justify-content-center align-items-center"><Trash onClick={() => deleteFromCart(prod.item.id)}/></div></td>    
                            
                             <td><div className="cart-td">${prod.item.price * prod.qty}</div></td>
                             
                         </tr>

                     ))
                  }
                   
                     </tbody>
                
                 </Table>
            
                <div className="d-flex justify-content-between flex-row ">

                    {/* <div className="d-flex justify-content-start m-2 ">
                        <button onClick={clearCart} className="take basket-2-text d-flex justify-content-center align-items-center shrink-on-hover ">
                            <span>Vaciar Carrito</span>      
                        </button> 
                    </div> */}

                    <div className="d-flex justify-content-start m-2 ">
                        <Link to="/checkout">
                            <button className="take basket-2-text d-flex justify-content-center align-items-center shrink-on-hover ">
                                Terminar compra
                            </button>
                        </Link>
                    </div>
                   
                    <div className="d-flex justify-content-end m-2 font-weight-bold">
                        <span className="span-subtotal">Subtotal: $ {totalInCart}</span>
                    </div>
                </div>


                <div className="d-flex justify-content-start m-2 ">
                        <button onClick={clearCart} className="take basket-2-text d-flex justify-content-center align-items-center shrink-on-hover clear-cart">
                            <span>Vaciar Carrito</span>      
                        </button> 
                </div>

                
            </div>
       
       
       }
    </>
    )
}