"use client";
import { useCartStore } from "@/Hook/useCartStore";
import { Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/Hook/useCartStore";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCartStore();

  const total = cart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return <div className="p-10 text-center text-2xl">Your cart is empty.</div>;
  }

  return (
    <div>
      <div className="space-y-4">
        {cart.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm w-48 truncate">
                  {item.title}
                </h3>
                <p className="text-slate-600">${item.price}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, -1)}
              >
                <Minus size={14} />
              </Button>
              <span className="font-bold">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <Plus size={14} />
              </Button>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeFromCart(item.id)}
              >
                <Trash2 size={14} />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 bg-slate-100 rounded-lg text-right">
        <p className="text-xl font-bold text-slate-900">
          Total: ${total.toFixed(2)}
        </p>
        <Button className="mt-4 bg-green-600 hover:bg-green-700">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartPage;
