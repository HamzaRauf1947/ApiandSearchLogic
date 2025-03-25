import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./Components/ProductList";
import Pagination from "./Components/Pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [search,setSerach] = useState("")
  const [input,setInput] =useState("")
  console.log('input value ',input);
  console.log('search value ',search);
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/product?limit=100"
        );
        setProducts(response.data.products);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = filteredProducts.slice(firstPostIndex, lastPostIndex);

  const totalPost = products.length;
  // console.log(totalPost);

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-yellow-300 underline text-5xl font-bold py-6">
          Products API
        </h1>
        <div className="flex justify-center gap-1 px-4">
          <input
           onChange={(e)=>setInput(e.target.value)}
            type="text"
            placeholder="Search the products..."
            className="w-full max-w-lg px-4 py-2.5 rounded-lg border border-gray-300 focus:border-yellow-300  text-white placeholder-gray-400 transition-all duration-200 hover:border-gray-400 hover:shadow-md focus:outline-none"
          />
          <button
          onClick={()=>setSerach(input)}
          className="bg-yellow-300 text-white py-2.5 px-2 font-bold cursor-pointer rounded-[4px]">Search</button>
          
        </div>
        <ProductList products={currentPost}  />
        <Pagination
          totalPost={totalPost}
          postPerPage={postPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
