import React from 'react';
import { Link } from 'react-router-dom';

export const Item= ( {id, img, name, description, price } ) => {
    return (

        <div className="card border-0 col-2 p-3 m-3 d-flex flex-column justify-content-between">
            <div className="img-container d-flex justify-content-center align-items-center h-50">
                <Link to={`/detail/${id}`}>
                    <img src={img} alt={name}/>
                </Link>

            </div>
            <div className="h-50">
                
                <div className="content-container mt-2 d-flex flex-row justify-content-between h-75">
                    <h4 className="h-50 d-flex flex-column justify-content-start align-self-start">{name}</h4>

                    <span className="font-alumni h-50 d-flex flex-column justify-content-end align-self-end">$ {price}</span>
                </div>  
                <div className="elementor-divider mt-4 h-25"> <span className="elementor-divider-separator"> </span></div>
            </div> 
        </div>
    
    )
}