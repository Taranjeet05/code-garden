import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Product } from "@/Hook/useProducts";
import { Eye, ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { useCartStore } from "@/Hook/useCartStore";
import { toast } from "sonner";

interface ProductCardProp {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProp) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart(product);

    toast.success(`${product.title.substring(0, 20)}... added to cart`, {
      description: "You can view your items in the cart page.",
    });
  };

  return (
    <Card className="group h-full flex flex-col overflow-hidden border-slate-200 hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <CardHeader className="p-0 relative bg-white">
        <div className="h-64 w-full relative p-6 bg-white overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <span className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider">
          {product.category}
        </span>
      </CardHeader>

      {/* Content Section */}
      <CardContent className="flex-1 p-4">
        <div className="flex justify-between items-start mb-2">
          <h3
            className="font-semibold text-slate-800 line-clamp-1 flex-1 mr-2"
            title={product.title}
          >
            {product.title}
          </h3>
          <div className="flex items-center bg-yellow-100 px-1.5 py-0.5 rounded">
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500 mr-1" />
            <span className="text-xs font-bold text-yellow-700">
              {product.rating.rate}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-500 line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="text-2xl font-bold text-slate-900">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>

      {/* Actions Section */}
      <CardFooter className="p-4 pt-0 gap-2">
        <Button
          onClick={handleAdd}
          className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700"
        >
          <ShoppingCart size={16} /> Add
        </Button>
        <Button variant="outline" size="icon" className="shrink-0">
          <Eye size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
