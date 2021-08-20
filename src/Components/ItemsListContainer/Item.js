import React from 'react';

export const Item= ( {img, name, description, price } ) => {
    return (
        <div className="card col-4 p-3 m-3">
            <div className="img-container d-flex justify-content-center align-items-center">
                <img src={img} alt={name}/>
            </div>
            <div className="content-container mt-2">
                <h3>{name}</h3>
                <p>{description}</p>
                <p>$ {price}</p>
            </div>
                
                    
                    
        </div>
    )
}