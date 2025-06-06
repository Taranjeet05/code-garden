// import { create } from "zustand";
// import { createJSONStorage, devtools, persist } from "zustand/middleware";

type CartItem = {
    id : number;
    title:string;
    price : number;
    quantity: number;

};


type CartStore = {
    cart : CartItem[];
    addToCart : (item : CartItem) => void;
    removeFromCart : (id : number) => void;
    clearCart : () => void;
    totalAmount : number;
    totalItems : number;
}

// export const useCartStore = create<CartStore>((set) => ({
//     cart: [],
//     addToCart: (item) => set((state) => {
//         const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
//         if (existingItem) {
//             return {
//                 cart: state.cart.map(cartItem =>
//                     cartItem.id === item.id
//                         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                         : cartItem
//                 )
//             };
//         } else {
//             return { cart: [...state.cart, { ...item, quantity: 1 }] };
//         }
//     }),
//     removeFromCart: (id) => set((state) => ({
//         cart: state.cart.filter(item => item.id !== id)
//     })),
//     clearCart: () => set({ cart: [] }),
//     totalAmount: 0,
//     totalItems: 0,
// }));

