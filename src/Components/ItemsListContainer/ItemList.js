import React from 'react';
import { Item } from './Item';

export const ItemList=({products = []})=>{
return (
    <section className= "container my-5">
        <h2>Productos</h2>
        <div className="row justify-content-around">
            {products.map((product)=> <Item key={product.id} {...product}/>)}
        </div>
    </section>
)

}