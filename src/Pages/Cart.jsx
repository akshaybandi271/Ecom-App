import { CartStore } from "../Context/CartContext"
import Product from "../Components/Product"

const Cart = () => {

 const {cart} = CartStore()

 const CartElement = cart.map(product => {
   return  <Product product={product} />
 })

 console.log(CartElement)

  return (
        <main>

            <h1>This is Cart Page</h1>

          <div  className="products-container">
            {CartElement}
          </div>
           

        </main>
  )
}

export default Cart
