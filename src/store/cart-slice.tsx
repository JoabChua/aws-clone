import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { CardDetail } from "../components/Card";

export interface Cart {
  cartCount: number;
  cartItems: CartItem[];
}

export interface CartItem extends CardDetail {
  count: number;
}

const initState: Cart = {
  cartCount: localStorage.getItem("cartCount")
    ? +localStorage.getItem("cartCount")!
    : 0,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : ([] as CartItem[]),
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartCount += action.payload.count;
      const idx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (idx > -1) {
        state.cartItems[idx].count += action.payload.count;
      } else {
        state.cartItems.push(action.payload);
      }

      localStorage.setItem("cartCount", state.cartCount.toString());
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Successfully added item into cart.", {
        position: "bottom-right",
        duration: 3000,
      });
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const idx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (idx > -1) {
        state.cartCount -= state.cartItems[idx].count;
        state.cartItems.splice(idx, 1);
      }

      localStorage.setItem("cartCount", state.cartCount.toString());
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Item removed from cart", {
        position: "bottom-right",
        duration: 3000,
      });
    },
    incrementInCart: (state, action: PayloadAction<{ id: number }>) => {
      const idx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (idx > -1) {
        state.cartItems[idx].count++;
        state.cartCount++;
      }

      localStorage.setItem("cartCount", state.cartCount.toString());
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrementInCart: (state, action: PayloadAction<{ id: number }>) => {
      const idx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (idx > -1) {
        state.cartItems[idx].count--;
        state.cartCount--;
      }

      if (state.cartItems[idx].count === 0) {
        state.cartItems.splice(idx, 1);
      }

      localStorage.setItem("cartCount", state.cartCount.toString());
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
