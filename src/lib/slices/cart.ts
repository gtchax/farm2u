import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocalStorageHandler, updateCart } from "../helper";
import { LOCAL_STORAGE } from "../utils";

export interface Product {
  _id: string;
  name: string;
  qty: number;
  price: number;
}

export interface ICartState {
  cartItems: Product[] | [];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
}

const initialCart = {
  cartItems: [],
  itemsPrice: 0,
  taxPrice: 0.0,
  shippingPrice: 0,
  totalPrice: 0,
};

const initialState: ICartState =
  LocalStorageHandler.getData<ICartState>(LOCAL_STORAGE) || initialCart;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const inCart = state.cartItems.find((a) => a._id === item._id);
      if (inCart) {
        state.cartItems = state?.cartItems.map((a) =>
          a._id === inCart._id ? item : a
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);

      //   state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))

      //   // 15% tax price
      //   state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))

      //   state.totalPrice = Number((Number(state.itemsPrice) + Number(state.taxPrice) + Number(state.shippingPrice)).toFixed(2))

      //   LocalStorageHandler.setData(LOCAL_STORAGE, state)
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
