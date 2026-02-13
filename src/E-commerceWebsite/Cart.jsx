import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from './Slice'

const Cart = () => {

    //useSelect to get the state from the store
   const cartProduct=  useSelector((state)=>state.cart)

   //useDispatch to sent an action for cart 
   const dispatch = useDispatch()

   //total products variable
   const totalProducts = cartProduct.length

   return (
  <>

      <div className="products-container">
        <h1>Cart Products</h1>
        <div className="products-grid">
          {cartProduct.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <p><strong>{product.title}</strong></p>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => dispatch(deleteCart(product.id))}>
                Remove from cart
              </button>
            </div>
          ))}
        </div>
        
        <h1>Total products: {cartProduct.length}</h1>
        {totalProducts  ===0 && <h1 style={{textAlign:"center"}}>Add products to cart</h1>}
      </div>
    
  </>
);
}

export default Cart;