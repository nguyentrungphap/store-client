import { getNews } from "@/apis/news/getNews";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface INews {
  id: number;
  title: string;
  date: string;
  content: string;
  image: string;
}

interface NewsState {
  news: INews[];
  setNews: (news: INews[]) => void;
  addNews: (item: INews) => void;
  updateNews: (id: number, item: Partial<INews>) => void;
  removeNews: (id: number) => void;
  clearNews: () => void;
  fetchNews: () => Promise<void>;
}

export const useNewsStore = create<NewsState>()(
  devtools((set) => ({
    news: [],
    setNews: (news) => set({ news }),
    addNews: (item) => set((state) => ({ news: [...state.news, item] })),
    updateNews: (id, item) =>
      set((state) => ({
        news: state.news.map((p) => (p.id === id ? { ...p, ...item } : p)),
      })),
    removeNews: (id) =>
      set((state) => ({
        news: state.news.filter((p) => p.id !== id),
      })),
    clearNews: () => set({ news: [] }),
    fetchNews: async () => {
      const news = await getNews();
      set({ news });
    },
  }))
);
