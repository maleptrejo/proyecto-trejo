import React, { useContext } from 'react'
import { Redirect } from 'react-router'
import { CartContext } from '../../Context/CartContext'
import Form from 'react-bootstrap/Form'
import Figure from 'react-bootstrap/Figure'

export const Checkout = () =>{

    const {handleSubmit, handleInputChange, cart, buyer} = useContext(CartContext)

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
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label className="font-alumni">Nombre</Form.Label>
                            <Form.Control type="text"
                            value={buyer.name}
                            onChange={handleInputChange}
                            name="name"
                            placeholder="Jose Pérez"
                            required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label className="font-alumni">Teléfono</Form.Label>
                            <Form.Control 
                            type="tel"
                            value={buyer.phone}
                            onChange={handleInputChange}
                            name="phone"
                            placeholder="(011)12341234"
                            required />
                        </Form.Group>
                        

                        <div className="d-flex flex-row w-100">
                        <Form.Group className="mb-3 w-50 mr-10" controlId="formBasicEmail">
                            <Form.Label className="font-alumni">Email</Form.Label>
                            <Form.Control 
                            type="email"
                            value={buyer.email}
                            onChange={handleInputChange}
                            name="email"
                            placeholder="jose@perez.com"
                            required/>
                        </Form.Group>

                        <Form.Group className="mb-3 w-50 ml-10" controlId="formBasicEmailConfirm">
                            <Form.Label className="font-alumni">Confirmar Email</Form.Label>
                            <Form.Control 
                            type="email_confirm"
                            value={buyer.email_confirm}
                            name="email_confirm"
                            placeholder="jose@perez.com"
                            required/>
                        </Form.Group>
                        </div> 
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
                </div>
                
            </section>

        }

        </div> 
        </>
    )
}

