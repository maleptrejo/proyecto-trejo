import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'
import { CartContext } from '../../Context/CartContext'
import { orderCtrl } from '../../Firebase/orderCtrl'
import Form from 'react-bootstrap/Form'
import Figure from 'react-bootstrap/Figure'

export const Checkout = () =>{

    const {cart, totalInCart, clearCart} = useContext(CartContext)

    const [buyer, setBuyer]= useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleInputChange= (e)=>{
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        //hacer un validador mas piola
        if (buyer.name.length > 3 && buyer.email.length > 3 && buyer.phone.length > 5) {
            orderCtrl(buyer, cart, totalInCart)
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Su compra fue registrada!',
                        text: `Guarde este identificador: ${res}`,
                        confirmButtonText: 'Genial!'
                    })

                    clearCart()
                })
                .catch( err => {
                    console.log(err)
                })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Campos inválidos',
                text: 'Revise su información'
              })
        }

    }

    return (
        <> 
        <div>
           
            
        {!cart.length 
            ? <Redirect to="/"/>
            :

            <section className= "container my-5">
                <h2 className="font-alumni">Checkout</h2>
                <div className="row justify-content-around mb-5 mt-5">
                    <h4 className="font-open-sanz">Datos de entrega</h4>
                </div>

                <div className="row ">

                <Form className="d-flex flex-row w-100" onSubmit={handleSubmit}>
                    <div className="w-50"> 
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-alumni">Nombre</Form.Label>
                            <Form.Control type="text"
                            value={buyer.name}
                            onChange={handleInputChange}
                            name="name"
                            placeholder="Jose Pérez"
                            required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-alumni">Teléfono</Form.Label>
                            <Form.Control 
                            type="tel"
                            value={buyer.phone}
                            onChange={handleInputChange}
                            name="phone"
                            placeholder="12341234"
                            required />
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="font-alumni">Email</Form.Label>
                            <Form.Control 
                            type="email"
                            value={buyer.email}
                            onChange={handleInputChange}
                            name="email"
                            placeholder="jose@perez.com"
                            required/>
                        </Form.Group>
                    </div>

                    <div className="w-50 d-flex flex-column justify-content-between align-items-center pb-2">
                        <div>
                            <Figure>
                                <Figure.Image
                                    width={171}
                                    height={180}
                                    alt="171x180"
                                    src="../Images/Chez_Didi_transparent.png"
                                />
                            </Figure>
                        </div>
                        <div className="d-flex justify-content-start m-2 ">
                            <button type="submit" className="take basket-2-text d-flex justify-content-center align-items-center shrink-on-hover ">
                                Finalizar
                            </button>
                        </div>
                    </div>
                </Form>


                    {/* <form onSubmit={handleSubmit} className="d-flex flex-column">
                        <input
                            type="text"
                            value={buyer.name}
                            onChange={handleInputChange}
                            name="name"
                            required
                        />
                        <input
                            type="tel"
                            value={buyer.phone}
                            onChange={handleInputChange}
                            name="phone"
                            required
                        />
                        <input
                            type="email"
                            value={buyer.email}
                            onChange={handleInputChange}
                            name="email"
                            required
                        />
                        <button type="submit">Submit</button>
                    </form> */}
                </div>
                
            </section>

        }

        </div> 
        </>
    )
}

