import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      name: 'Dominoz chilli panner',
      quantity: 1,
      unitPrice: 23,
      totalPrice: 34,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload need to be equal to new Item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      /* pizza id === payload */
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPriceQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
