import { createSlice } from "@reduxjs/toolkit";

const ProductDetailsSlice = createSlice({
  name: "productDetails",
  initialState: null, // one product
  reducers: {
    productDetails(state, action) {
      return action.payload; // replace with new product
    },
  },
});

export const { productDetails } = ProductDetailsSlice.actions;
export default ProductDetailsSlice.reducer;