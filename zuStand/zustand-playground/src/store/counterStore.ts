// Steps to create a Zustand store with TypeScript:

/*
1.) Import the `create` function from Zustand to define the global state.

2.) Define a TypeScript type or interface to describe the shape of the state and actions. This ensures type safety.

3.) Use the `create()` function with the `set` method to update the state based on the current value.

4.) Access the store in your components using the custom hook returned by `create`. 
    Zustand keeps your code clean, avoids prop drilling, and makes state management easier and scalable.
*/

import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

//  * | Feature  | localStorage                     | sessionStorage          |
//  * | -------- | -------------------------------- | ----------------------- |
//  * | Scope    | Stays until manually cleared     | Cleared when tab closes |
//  * | Use Case | Long-term login/session tracking | Temporary session data  |
//  *

export const useCounterStore = create<CounterStore>()(
  devtools(
    persist(
      (set) => ({
        count: 0,
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
        reset: () => set({ count: 0 }),
      }),

      {
        name: "CounterStorage",
        storage: createJSONStorage(() => sessionStorage),
      }
    )
  )
);
