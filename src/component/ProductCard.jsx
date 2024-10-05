import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({item}) {
  const {thumbnail , category ,title ,price,description, id } = item ;
  return (
 <> 
   <Link to={`/product/${id}`} className="lg:w-1/4 md:w-96 p-4 w-96 shadow-white" id="ProductCard" >
      <div>
      <div id="BoderEccomerce" className="border border-yellow-100  ">
        <a className="block relative h-52 rounded overflow-hidden ">
          <img
            alt="ecommerce"
            className="object-contain object-center w-full h-full block bg-white "
             id="Ecommerceimgs"
            src={thumbnail}
          />
      </a>
        <div className="mt-4">
        <h1 className="text-gray-500 text-4xl  tracking-widest title-font">
            {category}
          </h1>
        <h2 className="text-gray-100 title-font text-center text-xl font-medium">
          {title}
          </h2>
          {/* <p className="text-lime-300 text-center title-font font-sans font-semibold  text-lg mt-3 ">{description}</p> */}
          <button className=" inline-flex text-white font-semibold bg-purple-500 border-0 py-2 px-6 mt-4 focus:outline-none hover:bg-purple-600 rounded text-2xl ml-16">
                Add To Cart
              </button>
              <br/>
          <br/>
          <hr/>
          <h2 className="text-xl  text-gray-100 mt-4 mb-3 ml-8 font-bold"> ${price}</h2>
      </div>
        </div>
      </div>
      </Link>
    </>
  );
}
