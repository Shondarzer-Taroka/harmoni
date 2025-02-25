import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: {},
  totalItems: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      if (state.cartItems[id]) {
        state.cartItems[id] += quantity;
      } else {
        state.cartItems[id] = quantity;
      }
      state.totalItems = Object.values(state.cartItems).reduce((acc, curr) => acc + curr, 0);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity < 1) {
        delete state.cartItems[id];
      } else {
        state.cartItems[id] = quantity;
      }
      state.totalItems = Object.values(state.cartItems).reduce((acc, curr) => acc + curr, 0);
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
