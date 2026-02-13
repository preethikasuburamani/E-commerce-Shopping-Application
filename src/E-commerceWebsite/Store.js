import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice"
import productDetailsReducer from "./ProductDetailsSlice";
export const Store = configureStore({
    reducer:{
        cart :cartReducer,
        productDetails: productDetailsReducer,
    
    }
})