import React from 'react'

export default function Reviews() {
  return (
   <>
   <br/><br/><br/> <br/><br/><br/>
  <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-8xl  title-font text-gray-600 mb-12 text-center">
            <span id="one">What do our user say ?</span>
          </h1>

          <div className="flex justify-center flex-wrap -m-2 ml--11">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-400 p-7 px-34  rounded-xl">
                <div className="">
                  <img
                    src="https://th.bing.com/th/id/OIP._3Ety87HjD6pxdt5E08zVAHaHa?pid=ImgDet&w=203&h=203&c=7"
                    className="h-24 w-24 rounded-full"
                  />
                  <h2 className="font-bold text-5xl text-lime-700 mt-7">
                    Alice Johnson
                  </h2>
                  <p className="leading-relaxed mb- text-gray-900 font-semibold text-xl">
                    The store offers an excellent customer experience, with
                    friendly staff, a well-organized layout, and a seamless
                    checkout process. It’s a pleasure to shop here!
                  </p>
                  <h5 className="text-gray-900 text-xl font-bold mt-6">22-05-29</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-wrap -m-2 ml--11">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-400 p-7 px-34  rounded-xl">
                <div className="">
                  <img
                    src="https://th.bing.com/th/id/OIP.-cYzto6L3K4ToCFAULo4XwHaHa?pid=ImgDet&w=203&h=203&c=7"
                    className="h-24 w-24 rounded-full"
                  />
                  <h2 className="font-bold text-5xl text-lime-700 mt-7">
                    Bob Lee
                  </h2>
                  <p className="leading-relaxed mb- text-gray-900 font-semibold text-xl">
                    The store has a wide variety of products, all of great
                    quality. It’s impressive how well-stocked and diverse their
                    selection is, catering to different tastes and needs.
                  </p>
                  <h5 className="text-gray-900 text-xl font-bold mt-6">11-09-24</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   </>
  )
}
