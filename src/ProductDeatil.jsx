import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDeatil() {

  const { id } = useParams()
  const [product, setProduct] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
 
 useEffect(()=>{
  setNotFound(false)
 axios.get(`https://dummyjson.com/products/${id}`)
 .then((res)=>{
  setProduct(res.data);
  setLoading(false);
 })
 .catch((err)=>{
   setNotFound(true);
   setLoading(false);
   console.log(err);
 })
 },[]);
 
 
 return (
<div className="container mx-auto">
      {loading ? (
        <h1 className="text-center text-9xl mt-48 text-gray-50 font-bold">Loading....</h1>
      ) : 
      notFound ? 
      <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404 Not Found</h1>
        <p className="error-message">Sorry, we can’t find the page you’re looking for.</p>
        <a href="/product" className="home-link">Go Back Product Page</a>
      </div>
    </div> :

<section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-xl  text-gray-100 font-mono font-semibold tracking-widest">
        {product.category}
        </h2>
        <h1 className="text-gray-100 text-4xl  font-sans title-font mt-9">
      : {product.title}
        </h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
            Description
          </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
            Reviews
          </a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
            Details
          </a>
        </div>
        <p className="leading-relaxed mb-4 text-gray-100">
           {product.description}
             </p>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Color</span>
          <span className="ml-auto text-gray-900">Blue</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Size</span>
          <span className="ml-auto text-gray-900">Medium</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">Quantity</span>
          <span className="ml-auto text-gray-900">4</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-4xl text-gray-100">
           ${product.price}
          </span>
          <button className=" inline-flex text-white font-semibold bg-purple-500 border-0 py-2 px-3  focus:outline-none hover:bg-purple-600 rounded text-2xl ml-24">
                Add To Cart
              </button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>
      </div>
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded bg-slate-50"
        src={product.thumbnail}
      />
    </div>
  </div>
</section>
}
</div>

  )
}
