import React from 'react'

export default function Hero() {
  return (
    <>
   
   <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className="title-font sm:text-8xl  mb-7  font-bold text-gray-100"
              id="head1"
            >
              '' Online <br />
              <span className="text-lime-300" id="name">
                Shopping ..
              </span>
            </h1>
            <p className="mb-8 ml-3 text-2xl leading-relaxed text-gray-400 font-semibold">
              Track expenses, set budgets, and achieve your financial goals with
              1007 Store.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white font-bold bg-purple-500 border-0 py-2 px-10  ml-3  focus:outline-none hover:bg-purple-600 rounded text-2xl">
                Shop Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/973/916/non_2x/small-shop-flat-design-long-shadow-color-icon-grocery-store-coffee-house-cafe-silhouette-illustration-vector.jpg"
              className="object-cover object-center rounded-xl"
              id="hero"
            />
            <img
              className="object-cover object-center rounded-xl "
              alt="hero"
              src="https://citywidecartsavers.com/wp-content/uploads/2017/12/CityWide-Cart-Savers-Happy-Family.png"
            />
          </div>
        </div>
   
      </section>
      
    </>
  )
}
