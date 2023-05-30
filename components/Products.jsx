import React from "react";
import UnderLine from "./UnderLine";
import Product from "./Product";


export default function Products() {
  return (
    <>
      <div className='flex flex-col items-center py-8'>
        <div className="flex flex-col items-center justify-center w-5/6 md:w-3/6">
            <div className="max-w-fit">                
                <p className="text-2xl md:text-4xl font-bold text-center font-montserrat">Our Products</p>
                <UnderLine />                
            </div>
        </div>
        <div className="flex flex-wrap flex-row items-center justify-center overflow-hidden w-full md:w-4/6 gap-6 pt-8">
          <Product id="p1" />
          <Product id="p2" />
          <Product id="p3" />
          <Product id="p4" />
          <Product id="p5" />
          <Product id="p6" />
        </div>
      </div>
    </>
  );
}
