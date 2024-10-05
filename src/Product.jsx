import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./component/ProductCard";
import Navbar from "./component/Navbar";
import CategoriecChips from "./component/CategoriecChips";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory,setChosenCategory] = useState ('All')
    
  useEffect(() => {
    console.log("chosenCategory =>",chosenCategory)
    const url =
      chosenCategory === "All"
        ? `https://dummyjson.com/products`
        : `https://dummyjson.com/products/category/${chosenCategory}`;
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [chosenCategory]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
  <>
    <Navbar/><br></br><br></br>
    <div className="container mx-auto">
      {loading ? (
        <h1 className="text-center text-9xl mt-48 text-gray-50 font-bold">Loading....</h1>
      ) : (
        <div>
          <div className="flex gap-3 flex-wrap">
            <CategoriecChips
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              category={{
                slug: "All",
                name: "All",
              }}
            />
            {categories.map((category) => (
              <CategoriecChips
                onClick={() => setChosenCategory(category.slug)}
                isChosen={category.slug === chosenCategory}
                category={category}
                key={category.slug}
              />
            ))}
          </div>

          <div className="flex flex-wrap -m-4 my-4">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  </>
  );
}

export default Products;