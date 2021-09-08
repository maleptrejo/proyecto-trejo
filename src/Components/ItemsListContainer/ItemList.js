import React from 'react';
import { Item } from './Item';

export const ItemList=({products = [], title})=>{

    if(title===undefined){
        title="Nuestros productos"
    }
return (
    <section className= "container my-5">
        <h2 className="font-alumni">{title}</h2>
        <div className="row justify-content-around">
            {products.map((product)=> <Item key={product.id} {...product}/>)}
        </div>
    </section>
)

}