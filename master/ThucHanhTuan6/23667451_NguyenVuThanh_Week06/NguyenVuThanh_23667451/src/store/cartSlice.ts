import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { findBookById } from "../data/books";
import type { RootState } from "./store";

export type CartItem = {
  bookId: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [
    { bookId: "1", quantity: 1 },
    { bookId: "2", quantity: 1 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      const item = state.items.find((value) => value.bookId === action.payload);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ bookId: action.payload, quantity: 1 });
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(
        (value) => value.bookId !== action.payload,
      );
    },
    updateQuantity(
      state,
      action: PayloadAction<{ bookId: string; quantity: number }>,
    ) {
      const item = state.items.find(
        (value) => value.bookId === action.payload.bookId,
      );

      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartDetails = createSelector([selectCartItems], (items) =>
  items.flatMap((item) => {
    const book = findBookById(item.bookId);
    return book ? [{ ...item, book }] : [];
  }),
);

export const selectTotalQuantity = createSelector(
  [selectCartItems],
  (items) => items.reduce((total, item) => total + item.quantity, 0),
);

export const selectTotalPrice = createSelector([selectCartItems], (items) =>
  items.reduce((total, item) => {
    const book = findBookById(item.bookId);
    return total + (book?.price ?? 0) * item.quantity;
  }, 0),
);
