import React from "react";
import UnderLine from "./UnderLine";
import Product from "./Product";

import products from "../assets/content/products.json";
export default function Products() {
  return (
    <>
      <div className='flex flex-col items-center py-8' id="products">
        <div className="flex flex-col items-center justify-center w-5/6 md:w-3/6">
            <div className="max-w-fit">                
                <p className="text-2xl md:text-4xl font-bold text-center font-montserrat">Our Products</p>
                <UnderLine />                
            </div>
        </div>
        {/* <!-- timeline component --> */}
        <ol className=" mt-6 relative border-l border-gray-200 dark:border-gray-700">   
        {
          products.map((ele, idx) => 
            <li className="mb-10 ml-6" key={idx}>            
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <h1 className="mx-auto font-semibold text-lg text-white">{idx+1}</h1>
              </span>
              <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <iframe className='w-[75vw] h-56 md:w-[50vw] md:h-[30vw] rounded-lg mb-3' src={ele.video_url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </li>
          )
        }   
        </ol>
      </div>
    </>
  );
}
