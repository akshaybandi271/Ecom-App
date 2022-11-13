import './Components.css'
import { CartStore } from '../Context/CartContext'

const Product = ({product}) => {

  // Add oldPrice and Discount Price , I think make it a Container and do some styling on it


  const {_id,name,img,alt,brand,newPrice,oldPrice,discount,size,idealFor,rating} = product

  const {addProducts,cart,removeFromCart} = CartStore()

  return (
         <div className="product">
             <img src={img} alt={alt} className="product-image" />
             <p className="product-brand">{brand}</p>
             <p className="product-name">{name}</p>
             <p className="product-new-price">₹{newPrice}</p>

             {cart.includes(product) ? (
              <button className='add-cart-btn' onClick={()=>removeFromCart(_id)}>Remove From Cart</button>
             ) : (
              <button className="add-cart-btn" onClick={() => addProducts(_id)}>Add to Cart</button>
             )}

        </div>
  )
}


export default Product