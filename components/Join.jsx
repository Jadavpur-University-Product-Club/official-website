import React from 'react'
import UnderLine from './UnderLine'

export default function Join(){
  return (
    <>
      <div className='flex flex-col items-center py-8'>
        <div className="flex flex-col items-center justify-center  w-5/6 md:w-3/6">
            <div className="max-w-fit">                
                <p className="text-2xl md:text-4xl font-bold text-center font-montserrat">Join Us</p>
                <UnderLine />                
            </div>
            <p className="text-base md:text-lg text-justify font-open-sans mt-8 md:mt-12 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae repellat facilis animi quae consequatur facere rem error cupiditate, fuga cum, sit nisi sequi sapiente dicta eveniet incidunt! Voluptas vitae laborum dolor deleniti ea in nobis non sit possimus asperiores! Voluptate eveniet modi asperiores quidem neque suscipit officia consequatur corporis dolores? Dolores odit voluptatum alias nemo distinctio at impedit non, placeat vero aut libero mollitia doloribus maxime, voluptatibus, iste error commodi explicabo vitae nobis eveniet a soluta? Dolores, voluptate, debitis molestias nesciunt veniam natus illo nam repudiandae quis rem totam quam iste tempore aliquam dolore quae et ex perferendis velit magni.</p>
        </div>
        <button className="rounded-full my-4 bg-white hover:border-line-color-2 border-4 border-transparent text-black px-10 py-2 md:px-16 md:py-3 text-sm md:text-base font-semibold font-open-sans uppercase">Join Now</button>
      </div>
    </>
  )
}
