import { ICartState } from "./slices/cart";
import { LOCAL_STORAGE } from "./utils";

export class LocalStorageHandler {
  // Method to set data in localStorage
  static setData(key: string, data: object): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Method to get data from localStorage
  static getData<T>(key: string): T | null {
    const rawData = localStorage.getItem(key);
    if (rawData) {
      return JSON.parse(rawData) as T;
    }
    return null;
  }

  // Method to remove data from localStorage
  static removeData(key: string): void {
    localStorage.removeItem(key);
  }

  // Method to clear all data from localStorage
  static clearAllData(): void {
    localStorage.clear();
  }
}

export const addDecimals = (num: number) => {
  return Number((Math.round(num * 100) / 100).toFixed(2));
};

export const updateCart = (state: ICartState) => {
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  // 15% tax price
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  state.totalPrice = Number(
    (
      Number(state.itemsPrice) +
      Number(state.taxPrice) +
      Number(state.shippingPrice)
    ).toFixed(2)
  );

  LocalStorageHandler.setData(LOCAL_STORAGE, state);
};
