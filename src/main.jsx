import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
       <CartContextProvider>
         <App />
       </CartContextProvider>
    </Router>
  </React.StrictMode>
)
