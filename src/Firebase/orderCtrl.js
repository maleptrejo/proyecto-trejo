import { getFirestore } from '../Firebase/index'
import firebase from "firebase/app";
import 'firebase/firestore'



export const orderCtrl=(buyer, cart, total)=>{


    return new Promise( async (resolve, reject)=>{

        const db= getFirestore();
        const orders= db.collection("orders")
       
        let items=[];
        cart.map(c=>{
           
            let item={
                id: c.item.id,
                unit_price: c.item.price,
                qty: c.qty
            }
            items.push(item)
        })
        
        const newOrder={
            buyer: buyer,
            items: items,
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const itemsToUpdate = db.collection('products')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(prod => prod.item.id))

        const batch = db.batch()
        const query = await itemsToUpdate.get()

        const outOfStock = []


        //FALLA: cart.find está recibiendo un doc undefined.//
        query.docs.forEach((doc) => {
            const itemInCart = cart.find(prod => prod.item.id === doc.item.id)
            if (doc.data().stock >= itemInCart.qty ) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.qty })
            } else {
                outOfStock.push({id: doc.id, ...doc.data()})
            }
        })
        //fin falla//
        

        if (outOfStock.length === 0) {
            orders.add(newOrder)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                })
                .catch((err) => {
                    reject(err)
                })
        } else {
            reject({
                error: "Productos sin stock",
                sinStock: outOfStock
            })
        }
    }) 

}