import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { stockManager } from '../../Helpers/StockManager';
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetailContainer= ()=>{
 
    const { itemId } = useParams();

    const [ item, setItem ]= useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        stockManager()
        .then(r=>{
            setItem(r.find(item=> item.id=== parseInt(itemId)))
            //setItem(r.find(item=> item.id==itemId))

        })
        .finally(()=> { setLoading(false)})

    }, [itemId])

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            {
                loading
                ? <div className="block-ui"><h3> <Spinner animation="grow" /></h3></div>
                : <ItemDetail {...item}/>

            }
        </div>
    )

}

