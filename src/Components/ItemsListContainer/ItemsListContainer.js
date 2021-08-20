import React from 'react';
import { useEffect, useState } from 'react';
import { stockManager } from '../../Helpers/StockManager';
import { ItemList } from './ItemList';


const ItemsListContainer=({greeting})=>{

    const [data, setData]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        setLoading(true);

        stockManager()
            .then(res=> setData(res))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
    }, [])

    return (
       <>
            {loading ? <h2>Loading...</h2> 
            : <ItemList products={data}/> }
       </>
    )
}

export default ItemsListContainer;