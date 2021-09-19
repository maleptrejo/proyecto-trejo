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

    let regexMail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let regexPhone=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    const handleInputChange= (e)=>{
       
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const setErrorMsg=(title, text)=>{
        let errorObject={
            icon: 'error',
            title: title,
            text: text
        };

        return errorObject;
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        let isMailOk= e.target.email_confirm.value===buyer.email? true: false;

        if(buyer.name.length > 3 && regexMail.test(buyer.email) && regexPhone.test(buyer.phone) && isMailOk) {
            
            orderCtrl(buyer, cart, totalInCart)
                .then( res => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Su compra fue registrada!',
                        text: `Guarde este identificador: ${res}`,
                        confirmButtonText: 'Guardando!'
                    })

                    clearCart()
                })
                .catch( err => {
                    console.log(err)
                })
        } else {

            if(!isMailOk){
                Swal.fire(setErrorMsg("Revise su email", "Su email no coincide"))
               
            }
            else if(!regexPhone.test(buyer.phone)){
                console.log("error de phone")
                Swal.fire(setErrorMsg("Formato de teléfono incorrecto", "No olvide incluir el código de área"))
                
            }
            else if(!regexMail.test(buyer.email)){
                console.log("error de mail")
                Swal.fire(setErrorMsg("Revise su email", "El email debe tener @ y un dominio válido"))
               
            }else if(buyer.name.length <= 3){
                Swal.fire(setErrorMsg("Revise sus datos personales", "Ingrese un nombre válido o que tenga más de tres caracteres"))
               
            }

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

