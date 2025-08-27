import api from "@/apis/axiosInstance";

/**
 * Fetch cart data for a user by userId.
 * @param userId - The user ID to fetch cart for.
 * @returns Promise<CartItem[]> - Array of cart items (empty array on error)
 */
export async function getCart(userId: string): Promise<any[]> {
  try {
    const res = await api.get("/cart");
    return res.data || [];
  } catch (error) {
    return [];
  }
}
