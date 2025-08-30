import { getFavorite } from "@/apis/favorite/getFavorite";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface FavoriteItem {
  idProduct: string;
}

export interface IFavorite {
  id: string;       
  items: FavoriteItem[];
} 

interface FavoriteState {
  favorites: IFavorite;
  setFavorites: (fav: IFavorite) => void;
  addItem: (item: FavoriteItem) => void;
  removeItem: (id: string) => void;
  clearFavorites: () => void;
  fetchFavorites: () => Promise<void>;
}

export const useFavoriteStore = create<FavoriteState>()(
  devtools((set) => ({
    favorites: { id: "", items: [] },

    setFavorites: (fav) => set({ favorites: fav }),

    addItem: (item) =>
      set((state) => {
        const exists = state.favorites.items.find((i) => i.idProduct === item.idProduct);
        if (exists) return state;
        return { favorites: { ...state.favorites, items: [...state.favorites.items, item] } };
      }),

    removeItem: (id) =>
      set((state) => ({
        favorites: {
          ...state.favorites,
          items: state.favorites.items.filter((i) => i.idProduct !== id),
        },
      })),

    clearFavorites: () => set({ favorites: { id: "", items: [] } }),

    fetchFavorites: async () => {
      const favorites = await getFavorite();
      set({ favorites }, false, "favorite/setFavorites");
    },
  }))
);
