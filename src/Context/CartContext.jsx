import { useState,createContext, useContext , useReducer } from "react";
import {data} from '../db/data'
import cartReducer from "../Reducers/CartReducer";

// Done Used UseReducer Hook instead of UseState Hook 

// Now Push it to GitHub and then make a Clone the Repo and use redux instead of useReducer Hook
 




const CartContext = createContext()

const CartStore = () => useContext(CartContext) // This for custom hook for using content



const CartContextProvider = ({children}) => {

 const [products,setProducts] = useState(data)


const [cart,dispatch] = useReducer(cartReducer,[])

 function addProducts (id){
   dispatch({
        type: 'ADD_TO_CART',
        payload: id
    })
 }

 function removeFromCart (id){
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id
    })
 }


    return(
        <CartContext.Provider value={{products,addProducts,cart,removeFromCart}}>
           {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider,CartStore}