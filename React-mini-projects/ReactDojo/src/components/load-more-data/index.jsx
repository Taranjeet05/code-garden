import { useState } from "react"


const LoadMoreData = () => {

  // usestates
const [loading, setLoading] = useState(false);
const [products, setProducts] = useState([]);
const [count, setCount] = useState(0);


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