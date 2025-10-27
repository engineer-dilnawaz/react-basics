import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, payload) => {
      state.items.push(payload);
    },
    removeItem: (state, payload) => {
      state.items = state.items.filter((item) => item?.id !== payload.id);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    // increaseQuantity: (state, payload = 1) => {
    //     state.items
    // },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
