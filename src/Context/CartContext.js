import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [ cart, setCart ] = useState([])


    const changeQtyInCart=(prod, direction)=>{
        let newCart=[...cart]
        let index= newCart.findIndex(i=>i.item.id===prod.item.id)

        console.log(prod.item.stock)
        if ( direction === 'up' && prod.qty<prod.item.stock){

            newCart[index].qty = newCart[index].qty+1
            setCart(newCart)
        }
        if ( direction === 'down' && prod.qty>1){
            newCart[index].qty = newCart[index].qty-1
            setCart(newCart)
        }
        
        
    }

    // const addCart = (prod)=>{
    //     if(isInCart(prod.item.id)){
    //         cart.map(product=>{

    //             if(product.item.id===prod.item.id){
    //                 return product.qty+=prod.qty
    //             }
    //             return setCart([
    //                 ...cart,
    //                 prod
    //             ])
    //         })
    //     }else{
    //         setCart([
    //             ...cart,
    //             prod
    //         ])
    //     }
    // }

    const totalInCart = cart.reduce(( acc, curr) => { return acc + curr.item.price * curr.qty},0)
    
    const addCart = (prod) => {
        let newCart = [];
        if (isInCart(prod.item.id)) {
          cart.map((product) => {
            if (product.item.id === prod.item.id) {
              return newCart.push({
                item: product.item,
                qty: product.qty + prod.qty,
              });
            } else {
              return newCart.push({
                item: product.item,
                qty: product.qty,
              });
            }
          });
            setCart([...newCart])
        } else {
          setCart([...cart, prod]);
        }
      };

    const isInCart = (id) => {
        return cart.some(el => el.item.id === id)
    }

    const deleteFromCart = (id) => {
        setCart( cart.filter(prod => prod.item.id !== id) )
    }

    const clearCart=()=>{
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addCart, isInCart, deleteFromCart, clearCart, changeQtyInCart, totalInCart}}>
            {children}
        </CartContext.Provider>
    )
}

