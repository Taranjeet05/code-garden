import { useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const URL = "https://fakestoreapi.com/products";
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL);
        if (!response.ok)
          throw new Error(`Response status, ${response.status}`);
        const data: Product[] = await response.json();
        console.log("data is there,", data);
        setProducts(data);
      } catch (error) {

        console.error(error);
        setError("An Unknown Error occurred");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  // return the values
  return { products, loading, error };
};
