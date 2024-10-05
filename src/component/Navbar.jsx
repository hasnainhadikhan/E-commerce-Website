import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
  <header className=" bg-slate-100 text-gray-600 body-font" id="header">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium   items-center text-gray-950 mb-4 md:mb-0">
            <img
              src="https://i.pinimg.com/originals/9b/46/b6/9b46b6af5713726ede3bc07eb5787f0a.jpg"
              className=" h-16 w-16 rounded-full"
            />
            <span className="ml-2 mt-3 text-6xl font-bold " id="one">
              1007 Store
            </span>
          </a>
          <nav className="md:ml-28 mt-2 md:mr-auto flex flex-wrap items-center text-3xl justify-center text-sky-600 font-mono font-semibold">
            <button className="mr-5 hover:text-gray-950 ">
              <Link to={"/"}>Home</Link>{" "}
            </button>
            <button className="mr-5 hover:text-gray-950 ">
              <Link to={"/Product"}>Products</Link>{" "}
            </button>
            <button className="mr-5 hover:text-gray-950 ">
              <Link to={"/contact"}> Contact</Link>
            </button>
          </nav>
         
          <button className="inline-flex items-center font-mono font-bold text-gray-100 h-12   py-1 px-8 focus:outline-none rounded-xl text-2xl  md:mt-2 hover:text-white bg-sky-500 " id='Navbtn'>
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </header>
   
    </>
  )
}
