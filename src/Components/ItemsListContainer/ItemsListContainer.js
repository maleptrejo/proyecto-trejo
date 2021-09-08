import React from 'react';
import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../Firebase/index';

const ItemsListContainer=()=>{

    
    const { catId }= useParams()
    const [data, setData]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        setLoading(true);

        const db = getFirestore()
        const products = db.collection('products')
        

        if (catId) {
            const filteredProducts = products.where('category_id', '==', catId)

            filteredProducts.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    setData(data)
                })
                .finally(()=> {
                    setLoading(false)
                })
        }else{
            products.get()
            .then((response) => {
                const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setData(data)
            })
            .finally(()=> {
                setLoading(false)
            })
        }}, [catId, setLoading])


    return (
       <>
            {loading ? 
            <div className="block-ui"><h3> <Spinner animation="grow" /></h3></div>
            : <ItemList products={data} title={catId}/> }
       </>
    )
}

export default ItemsListContainer;