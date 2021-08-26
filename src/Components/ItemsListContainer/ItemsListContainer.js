import React from 'react';
import { useEffect, useState } from 'react';
import { stockManager } from '../../Helpers/StockManager';
import { ItemList } from './ItemList';
import Spinner from 'react-bootstrap/Spinner';

import { useParams } from 'react-router-dom';


const ItemsListContainer=({greeting})=>{

    const { catId }= useParams()
    const [data, setData]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        setLoading(true);

        stockManager()
            .then(r=>{
                    if(catId){
                        const filterByCat=r.filter(prod=>prod.category_id===parseInt(catId))

                        console.log(r)
                        console.log(catId)

                        setData(filterByCat)
                    }else{
                        console.log(r)
                        setData(r)
                    }

            })
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
    }, [catId])

    return (
       <>
            {loading ? 
            <div className="block-ui"><h3> <Spinner animation="grow" /></h3></div>
            : <ItemList products={data}/> }
       </>
    )
}

export default ItemsListContainer;