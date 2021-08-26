import React from 'react';
import { Link } from 'react-router-dom';
import { HandIndexThumb } from 'react-bootstrap-icons';

export const Item= ( {id, img, name, description, price } ) => {
    return (

        <div className="card col-4 p-3 m-3">
        <div className="img-container d-flex justify-content-center align-items-center">
        <Link to={`/detail/${id}`}>
            <img src={img} alt={name}/>
        </Link>
            
        </div>
        <div className="content-container mt-2 d-flex justify-content-between">
            <h4>{name}</h4>
            
            <p>$ {price}</p>
        </div>   
    </div>
    
    )
}