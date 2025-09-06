import { getProducts } from "@/apis/product/getProduct";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface FlashSale {
  startDay: string; // e.g. "26/08/2025"
  startTime: string; // e.g. "20:00:00"
  endDay: string; // e.g. "29/08/2025"
  endTime: string; // e.g. "23:59:00"
  image: string; // flash sale banner image
}
export interface IProduct {
  id: string;
  name: string;
  image?: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  brand?: string;
  category: string;
  barcode?: string;
  rating?: number;
  flashSale?: FlashSale;
  color?: string[];
  size?: string[];
  voucher?: string[];
}

interface ProductState {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
  addProduct: (product: IProduct) => void;
  updateProduct: (id: string, product: Partial<IProduct>) => void;
  removeProduct: (id: string) => void;
  clearProducts: () => void;
  fetchProduct: () => Promise<void>;
}

export const useProductStore = create<ProductState>()(
  devtools((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    addProduct: (product) =>
      set((state) => ({ products: [...state.products, product] })),
    updateProduct: (id, product) =>
      set((state) => ({
        products: state.products.map((p) =>
          p.id === id ? { ...p, ...product } : p
        ),
      })),
    removeProduct: (id) =>
      set((state) => ({
        products: state.products.filter((p) => p.id !== id),
      })),
    clearProducts: () => set({ products: [] }),
    fetchProduct: async () => {
      const products = await getProducts();
      set({ products });
    },
  }))
);
