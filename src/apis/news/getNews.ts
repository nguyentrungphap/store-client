import api from "@/apis/axiosInstance";
import type { INews } from "@/store/news";

/**
 * Fetch all news.
 * @returns Promise<Product[]> - Array of news (empty array on error)
 */
export async function getNews(): Promise<INews[]> {
  try {
    const res = await api.get<INews[]>(`/news`);
    return res.data || [];
  } catch (error) {
    return [];
  }
}

// export async function getProductById(id: string): Promise<INews | null> {
//   try {
//     const res = await api.get<INews>(`/news/${id}`);
//     return res.data || null;
//   } catch (error) {
//     return null;
//   }
// }
