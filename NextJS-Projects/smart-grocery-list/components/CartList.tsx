"use client";
import { GroceryItem } from "@/types/grocerySchema";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge"; // Assuming you have Shadcn Badge
import { Trash2, ShoppingBasket } from "lucide-react";

const CartList = () => {
  const [items, setItems] = useState<GroceryItem[]>(() => {
    // Fixed: added quotes around "undefined"
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("items");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const removeItem = (id: string) => {
    const updateItem = items.filter((item) => item.id !== id);
    setItems(updateItem);
    localStorage.setItem("items", JSON.stringify(updateItem));
  };

  return (
    <div className="p-2">
      <Card className="w-full max-w-5xl mx-auto shadow-lg mt-4">
        <CardHeader className="border-b bg-muted/20">
          <div className="flex items-center gap-2">
            <ShoppingBasket className="h-5 w-5 text-primary" />
            <CardTitle>Grocery List</CardTitle>
          </div>
          <CardDescription>
            You have {items.length} items in your cart
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {items.length === 0 ? (
            <div className="p-10 text-center text-muted-foreground">
              No items added yet.
            </div>
          ) : (
            <div className="divide-y">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="sm:space-y-5 space-y-2.5">
                    <h3 className="font-semibold text-3xl sm:text-4xl leading-none">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="secondary"
                        className="capitalize text-sm px-3"
                      >
                        {item.category}
                      </Badge>
                      <span className="text-lg text-muted-foreground">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CartList;
