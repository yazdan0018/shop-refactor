import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload.id) {
        const itemIndex = state.findIndex(
          item => item.id === action.payload.id,
        );
        if (itemIndex >= 0) {
          state[itemIndex].quantity += 1;
        } else {
          const product = {
            ...action.payload,
            quantity: 1,
          };
          state.push(product);
        }
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const { addToCart, removeFromCart, cart } =
  cartSlice.actions;
export default cartSlice.reducer;
