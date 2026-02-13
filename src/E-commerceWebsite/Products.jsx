import React from 'react'
import "./products.css"
import { productDetails } from "./ProductDetailsSlice";
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddtoCart } from './Slice';
import { useNavigate } from 'react-router-dom';

const Products = () => {

  //state to manage the products 
  const [products, setProducts] = useState([]);


  //fetch data products from server
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    }, []);


    //useDispatch to provide an action to the store
  let dispatch = useDispatch()

  let navigate = useNavigate()


 if(products.length ===0){
  return <h1>Loading...</h1>
 }
 else{
  return (
    <div className="products-container">
      
      <h1>Products Page</h1>
      <button onClick={()=>{navigate("/createProduct")}}>Post product</button>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <p><strong>{product.title}</strong></p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            <button onClick={()=>{dispatch(AddtoCart(product))}} > Add to cart</button>

            <button  onClick={()=>{dispatch(productDetails(product))
              navigate("/productDetail")
            }}>view Product</button>
          </div>
        ))}
      </div>
    </div>
  );
};
}
export default Products;