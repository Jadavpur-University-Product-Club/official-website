import Image from "next/image";

export default function Product({id}){
    return (
        <>
            <div className="w-fit  p-2" id={id}>
                {/* Product Div */}
                <div className="w-[300px] h-[300px] overflow-hidden rounded-2xl border border-slate-400 relative">
                    <Image
                        src="https://img.freepik.com/free-vector/gradient-geometric-shapes-dark-background-design_23-2148433740.jpg"
                        alt="Product Image"
                        className="object-cover w-full h-full rounded-2xl"
                        width={300}
                        height={300}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-black bg-opacity-70 font-open-sans font-semibold text-xl flex justify-center items-center">
                        Product Demo
                    </div>
                </div>

                {/* Button */}
                <button className="mt-5 bg-white py-3 w-full rounded-full text-product-card-btn-active text-xl font-open-sans font-semibold">
                    Explore Now
                </button>
                    
            </div>
        </>
    )
}