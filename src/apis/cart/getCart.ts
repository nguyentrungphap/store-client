import api from "@/apis/axiosInstance";
import type { ICart } from "@/store/cart";

/**
 * Fetch cart data for a user by userId.
 * @param userId - The user ID to fetch cart for.
 * @returns Promise<CartItem[]> - Array of cart items (empty array on error)
 */
export async function getCart(userId: string): Promise<ICart | null> {
  try {
    const res = await api.get("/cart");
    return res.data || null;
  } catch (error) {
    return null;
  }
}
