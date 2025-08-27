import { getProducts } from "@/apis/product/getProduct";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  image?: string;
  //   category?: string;
  discount?: string;
  rating?: number;
  oldPrice?: number;
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
