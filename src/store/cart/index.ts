import { create } from "zustand";
import { devtools } from "zustand/middleware";
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
}
[];
export interface ICart {
  cartId: string;
  userId: string;
  items: CartItem[];
}

import { getCart } from "@/apis/cart/getCart";

interface CartState {
  cart: ICart | null;
  setCartItems: (item: ICart) => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  fetchCart: (userId: string) => Promise<void>;
}

export const useCartStore = create<CartState>()(
  devtools((set) => ({
    cart: null,
    setCartItems: (cartObj) => set({ cart: cartObj }),
    addItem: (item) =>
      set((state) => {
        if (!state.cart) return state;
        const exists = state.cart.items.find((i) => i.id === item.id);
        let newItems;
        if (exists) {
          newItems = state.cart.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
        } else {
          newItems = [...state.cart.items, item];
        }
        return { cart: { ...state.cart, items: newItems } };
      }),
    removeItem: (id) =>
      set((state) => ({
        cart: state.cart
          ? {
              ...state.cart,
              items: state.cart.items.filter((i) => i.id !== id),
            }
          : null,
      })),
    updateQuantity: (id, quantity) =>
      set((state) => ({
        cart: state.cart
          ? {
              ...state.cart,
              items: state.cart.items.map((i) =>
                i.id === id ? { ...i, quantity } : i
              ),
            }
          : null,
      })),
    clearCart: () => set({ cart: null }),
    fetchCart: async (userId: string) => {
      const cart = await getCart(userId);
      set({ cart: cart }, false, "cart/setCartItems");
    },
  }))
);
