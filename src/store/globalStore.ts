import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GlobalState {
  loading: boolean;
  error: any;
  setLoading: (loading: boolean) => void;
  setError: (error: any) => void;
  clearError: () => void;
}

export const useGlobalStore = create<GlobalState>()(
  devtools((set) => ({
    loading: false,
    error: null,
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
    clearError: () => set({ error: null }),
  }))
);
