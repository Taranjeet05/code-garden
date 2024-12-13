import { useState } from "react"


const LoadMoreData = () => {

  // usestates
const [loading, setLoading] = useState(false);
const [products, setProducts] = useState([]);
const [count, setCount] = useState(0);

async function fetchProducts() {
  try {
    setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );

    const result = await response.json();

    if (result && result.products && result.products.length) {
      setProducts((prevData) => [...prevData, ...result.products]);
      setLoading(false);
    }

    console.log(result);
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
}



// useeffect 
useEffect(() => {
  fetchProducts();
}, [count]);


  return (
    <>
      <div className=""></div>
    </>
  )
}

export default LoadMoreData


// this is the website where we can get dummy products for this project
// dummyjson.com/docs/products