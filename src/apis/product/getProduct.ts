import api from "@/apis/axiosInstance";
import type { IProduct } from "@/store/product";

/**
 * Fetch all products.
 * @returns Promise<Product[]> - Array of products (empty array on error)
 */
export async function getProducts(): Promise<IProduct[]> {
  try {
    const res = await api.get<IProduct[]>(`/products`);
    return res.data || [];
  } catch (error) {
    return [];
  }
}

export async function getProductById(id: string): Promise<IProduct | null> {
  try {
    const res = await api.get<IProduct>(`/products/${id}`);
    return res.data || null;
  } catch (error) {
    return null;
  }
}