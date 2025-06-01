import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ProductStore = {
  products: product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
};

export const useProductStore = create<ProductStore>()(
  devtools(
    persist(
      (set) => ({
        products: [],
        loading: false,
        error: null,
        fetchProducts: async () => {
          try {
            set({ loading: true, error: null });
            const response = await axios.get<product[]>(
              "https://fakestoreapi.com/products"
            );
            set({ loading: false, products: response.data, error: null });
          } catch (error: unknown) {
            set({
              error: error instanceof Error ? error.message : String(error),
            });
          }
        },
      }),
      {
        name: "productStorage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
