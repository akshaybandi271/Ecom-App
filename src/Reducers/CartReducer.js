import {data} from '../db/data'



function cartReducer(state,action){


    switch(action.type){

        case 'ADD_TO_CART': 
           const selectedProduct = data.find(product => product._id === action.payload)
           return [...state,selectedProduct]
           
        case 'REMOVE_FROM_CART':
            return state.filter(product => product._id !== action.payload)
    }
}

export default cartReducer