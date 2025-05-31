// https://jsonplaceholder.typicode.com/users

// 🚀 Practicing Async State & Actions in Zustand using Axios
// – Let's level up our state management!

import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
};

type UserStore = {
  user: User[];
  loading: boolean;
  error: string | null;
  fetchUser: () => void;
};

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: [],
        loading: false,
        error: null,
        fetchUser: async () => {
          try {
            set({ loading: true, error: null });
            const response = await axios.get(
              "https://jsonplaceholder.typicode.com/users"
            );
            set({ loading: false, user: response.data });
          } catch (err: unknown) {
            set({
              error: err instanceof Error ? err.message : String(err),
              loading: false,
            });
          }
        },
      }),
      { name: "userStorage", storage: createJSONStorage(() => sessionStorage) }
    )
  )
);
