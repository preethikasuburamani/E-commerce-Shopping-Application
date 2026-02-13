import { createSlice } from "@reduxjs/toolkit";


//cartSlice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddtoCart: (state, action) => {
      state.push(action.payload); // add new product to cart
    },
    deleteCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload); 
      // keep everything except the one with matching id
    },
  },
});

export const { AddtoCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;

