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
        <div className="flex flex-wrap flex-row items-center justify-center overflow-hidden w-full md:w-4/6 gap-6 pt-8">
          {
            products.map((ele, idx) => <Product id={"p"+idx} key={idx} title={ele.title} description={ele.description} image_url={ele.image_url} video_url={ele.video_url}/>)
          }
        </div>
      </div>
    </>
  );
}
