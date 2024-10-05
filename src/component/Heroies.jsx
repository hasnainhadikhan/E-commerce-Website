import React from "react";

export default function Heroies() {
  return (
    <section>
      <h1 id="one" className="head1 text-gray-600">
        Routine--Reliabiltiy
      </h1>
      <br />
      <br />
      <img
        className="ml-28 lg:max-w-lg  lg:md:w-1/2 w-2/3"
        id="heroImgthree"
        alt="hero"
        src="https://images.unsplash.com/photo-1636499410733-c1244037bfa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <h1 id="heroieH1">The Daily Grocer </h1>
      <h5 className="text-2xl text-gray-300" id="heroiesp">
        "The Daily Grocer" is a great name  a grocery store, as it implies help<br/>
        freshness, routine,its and reliability—qualities that are essential for a<br/>
        local market. It gives the sense that customers can come in daily for<br/>
        their fresh produce, essentials, if and meals
      </h5>
      <div className="flex justify-center">
              <button className="inline-flex text-white font-bold bg-purple-500 border-0 py-3 px-14 mt-6 focus:outline-none hover:bg-purple-600 rounded text-2xl">
                Shop Now
              </button>
            </div>
      
    </section>
  );
}
