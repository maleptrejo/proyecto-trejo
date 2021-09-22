import { createContext, useState } from "react";
import Swal from 'sweetalert2';
import { orderCtrl } from '../Firebase/orderCtrl'

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    const [ cart, setCart ] = useState([])

    const [order, setOrder]=useState([])


    const changeQtyInCart=(prod, direction)=>{
        let newCart=[...cart]
        let index= newCart.findIndex(i=>i.item.id===prod.item.id)

        if ( direction === 'up' && prod.qty<prod.item.stock){

            newCart[index].qty = newCart[index].qty+1
            setCart(newCart)
        }
        if ( direction === 'down' && prod.qty>1){
            newCart[index].qty = newCart[index].qty-1
            setCart(newCart)
        }
        
    }

    const getItemsFromCart=(cart)=>{
      let items=[];
      cart.map(c=>{
          let item={
              category: c.item.catId,
              id: c.item.id,
              unit_price: c.item.price,
              qty: c.qty
          }
          return items=[...items, item]
      })
      setOrder(items)
  }


    const totalInCart = cart.reduce(( acc, curr) => { return acc + curr.item.price * curr.qty},0)

    const itemsInCart = cart.reduce(( acc, curr) => { return acc + curr.qty},0)
    
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

    const [buyer, setBuyer]= useState({
      name: '',
      phone: '',
      email: ''
  })

  let regexMail=/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let regexPhone=/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

  const handleInputChange= (e)=>{
       
    setBuyer({
        ...buyer,
        [e.target.name]: e.target.value
    })
}

const setErrorMsg=(title, text)=>{
  let errorObject={
      icon: 'error',
      title: title,
      text: text
  };

  return errorObject;
}

const handleSubmit = (e)=>{
  e.preventDefault()
  
  let isMailOk= e.target.email_confirm.value===buyer.email;

  if(buyer.name.length > 3 && regexMail.test(buyer.email) && regexPhone.test(buyer.phone) && isMailOk) {
      
      orderCtrl(buyer, cart, totalInCart)
          .then( res => {
              Swal.fire({
                  icon: 'success',
                  title: 'Su compra fue registrada!',
                  text: `Guarde este identificador: ${res}`,
                  confirmButtonText: 'Guardando!'
              })

              clearCart()
          })
          .catch( err => {
              Swal.fire(setErrorMsg("Error 500", "Realice la operación más tarde"))
          })
  } else {

      if(!isMailOk){
          Swal.fire(setErrorMsg("Revise su email", "Su email no coincide"))
         
      }
      else if(!regexPhone.test(buyer.phone)){
 
          Swal.fire(setErrorMsg("Formato de teléfono incorrecto", "No olvide incluir el código de área"))
          
      }
      else if(!regexMail.test(buyer.email)){
          
          Swal.fire(setErrorMsg("Revise su email", "El email debe tener @ y un dominio válido"))
         
      }else if(buyer.name.length <= 3){
          Swal.fire(setErrorMsg("Revise sus datos personales", "Ingrese un nombre válido o que tenga más de tres caracteres"))
         
      }

  }

}

    return (
        <CartContext.Provider value={{handleSubmit, setErrorMsg, handleInputChange, regexMail,regexPhone, buyer, setBuyer, getItemsFromCart, order, cart, addCart, isInCart, deleteFromCart, clearCart, changeQtyInCart, totalInCart, itemsInCart}}>
            {children}
        </CartContext.Provider>
    )
}

