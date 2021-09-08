import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import Spinner from 'react-bootstrap/Spinner';
import { getFirestore } from '../../Firebase/index'

export const ItemDetailContainer= ()=>{
 
    const { itemId } = useParams();

    const [ item, setItem ]= useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const products = db.collection('products')
        const item = products.doc(itemId)

        item.get()
            .then((doc) => {
            setItem( {...doc.data(), id: doc.id} )
            })
            .finally(()=> { setLoading(false)})


    }, [itemId, setLoading])

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

