import Image from "next/image";

export default function Product({id, title, image_url}){
    return (
        <>
            <div className="w-fit  p-2" id={id}>
                {/* Product Div */}
                <div className="w-[75vw] h-[75vw]  md:w-[300px] md:h-[300px] overflow-hidden rounded-2xl border border-slate-400 relative">
                    <Image
                        src={image_url}
                        alt="Product Image"
                        className="object-cover w-[75vw] h-[75vw]  md:w-[300px] md:h-[300px] rounded-2xl"
                        fill
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/6 md:h-1/4 bg-black bg-opacity-70 font-open-sans font-semibold text-base md:text-xl flex justify-center items-center">
                        {title}
                    </div>
                </div>

                {/* Button */}
                <button className="mt-4 md:mt-5 bg-white py-2 md:py-3 w-full rounded-full text-product-card-btn-active text-base md:text-xl font-open-sans font-semibold">
                    Explore Now
                </button>
                    
            </div>
        </>
    )
}