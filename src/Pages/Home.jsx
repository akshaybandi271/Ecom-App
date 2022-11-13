import Product from "../Components/Product"
import { CartStore } from "../Context/CartContext"

const Home = () => {

    const {products,cart} = CartStore()
  
    const ProductElement = products.map(product => {
        return <Product  product={product} key={product._id}/>             
    })



    return (
        <main className="products-container">
           {ProductElement}
        </main>
  )
}

export default Home
