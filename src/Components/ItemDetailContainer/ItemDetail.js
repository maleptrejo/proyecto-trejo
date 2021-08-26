import React from 'react';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import { Basket2 } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const ItemDetail= ({id, price, name, img, description, catId})=>{

   return (

        <Card className="w-75 h- card-detail border-white">
          
          <Card.Body className="card-item-detail d-flex justify-content-between">

           <div className="d-flex flex-column justify-content-between">
                    <div>
                        <div>
                            <Link to={`/`}> 
                                <div className="d-flex flex-row justify-content-between"> 
                                    <p><ArrowLeft /></p>
                                    <p className="mx-3">Volver a la página principal</p>
                                </div>
                            </Link>
                           
                            
                            <div className="elementor-divider"> <span className="elementor-divider-separator"> </span></div>
    
                        </div>
    
                        <div>
                            <h3 className="font-alumni font-bigger ">{name}</h3>
                        </div>

                    </div>

                    <div>
                        <div>
                            <h5 className="font-alumni font-bigger ">${price}</h5>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div><input type="number"/></div>
                            <div className="">
                                <button className=" basket-2-text d-flex justify-content-between align-items-center shrink-on-hover">
                                    <span>Me los llevo</span>
                                    <span className="d-flex align-items-center"><Basket2 /></span>
                                </button>
                            </div>
                        </div>
                    </div>
           </div>

           <div className="d-flex flex-row align-items-center img-container-detail justify-content-end">
                   
                <div className="img-frame d-flex align-items-center justify-content-center">
                    <img  src={img} alt={name}/>
                </div>   

           </div>


          </Card.Body>
          
          <div className="elementor-divider"> <span className="elementor-divider-separator"> </span></div>


          <Card.Footer className="d-flex justify-content-between background-white border-white">
              <div className="d-flex flex-column justify-content-center"><h5 className="font-alumni">Descripción</h5></div>
              <div className="mx-4 fon"><p className="text-justify mb-0 font-smaller">{description}</p></div>
          </Card.Footer>
   
        </Card>

    
   )

}