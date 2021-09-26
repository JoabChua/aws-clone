import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "@reduxjs/toolkit/node_modules/immer/dist/internal";
import toast from "react-hot-toast";
import { CardDetail } from "../components/Card";

export interface Cart {
  cartCount: number;
  cartItems: CartItem[];
  totalPrice: number;
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
  totalPrice: localStorage.getItem("totalPrice")
    ? +localStorage.getItem("totalPrice")!
    : 0,
};

const setInfoIntoLocalStorage = (state: WritableDraft<Cart>) => {
  localStorage.setItem("cartCount", state.cartCount.toString());
  localStorage.setItem("totalPrice", state.totalPrice.toString());
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
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
      state.totalPrice += action.payload.count * action.payload.price;

      if (idx > -1) {
        state.cartItems[idx].count += action.payload.count;
      } else {
        state.cartItems.push(action.payload);
      }

      setInfoIntoLocalStorage(state);
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
        state.totalPrice -= action.payload.count * action.payload.price;
        state.cartItems.splice(idx, 1);
      }

      setInfoIntoLocalStorage(state);
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
        state.totalPrice += state.cartItems[idx].price;
        state.cartCount++;
      }
      setInfoIntoLocalStorage(state);
    },
    decrementInCart: (state, action: PayloadAction<{ id: number }>) => {
      const idx = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id,
      );
      if (idx > -1) {
        state.cartItems[idx].count--;
        state.totalPrice -= state.cartItems[idx].price;
        state.cartCount--;
      }

      if (state.cartItems[idx].count === 0) {
        state.cartItems.splice(idx, 1);
      }
      setInfoIntoLocalStorage(state);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
