import React from 'react';
import { Plus } from 'react-bootstrap-icons';
import { Dash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export const Counter= ({qty, setQty, max, addingToCartHandler, isAdded}) => { 

    const handleSumm = () => {
        if (qty < max) {
            setQty(qty + 1)
        }
    }
    const handleRest = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    return (
        <>
            <div className="d-flex w-100">
                {
                    isAdded
                    ? <Link to="/cart" className="w-100 p-0" >
                        <button className="w-100 m-0 p-0 basket-2-text d-flex justify-content-center align-items-center shrink-on-hover ">
                            <span>Terminar mi compra</span>
                        </button> 
                     </Link>
                    :<div className="d-flex buttons-counter">
                            <div>
                               <div className="d-flex counter-btns-container">
                                    <button className="mx-1" onClick={handleRest}><Dash /></button>
                                         <span className="d-flex justify-content-center span-counter">{qty}</span>
                                    <button className="mx-1" onClick={handleSumm}><Plus /></button>
                               </div>
                            </div>

                            <div className="w-50" >
                                <button onClick={addingToCartHandler} className="take basket-2-text d-flex justify-content-center align-items-center shrink-on-hover ">
                                    <span>Me los llevo</span>
                               
                                </button>   
                            </div> 
                        </div>
                }
            </div>
        </>
    )
}


