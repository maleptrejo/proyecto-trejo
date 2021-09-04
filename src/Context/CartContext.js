import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [ cart, setCart ] = useState([])

    const addCart = (prod)=>{
        
        if(isInCart(prod.item.id)){
            cart.map(product=>{
                if(product.item.id===prod.item.id){
                    return product.qty+=prod.qty
                }
            })
        }else{
            setCart([
                ...cart,
                prod
            ])
        }

    }

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
        <CartContext.Provider value={{cart, addCart, isInCart, deleteFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

