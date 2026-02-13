import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddtoCart } from "./Slice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetails);
  console.log(productDetail)

  return (
    <div>
      {productDetail ? (
        <div className="product-card">
          <img src={productDetail.image} alt={productDetail.title} />
          <p><strong>{productDetail.title}</strong></p>
          <p>{productDetail.description}</p>
          <p>Price: ${productDetail.price}</p>

          <button onClick={() => dispatch(AddtoCart(productDetail))}>
            Add to cart
          </button>
        </div>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
};

export default ProductDetails;