import React from 'react'
import UnderLine from './UnderLine'

export default function About(){
  return (
    <>
      <div className='flex flex-col items-center py-8'>
        <div className="flex flex-col items-center justify-center w-3/6">
            <div className="max-w-fit">                
                <p className="text-4xl font-bold text-center font-montserrat">About Us</p>
                <UnderLine />                
            </div>
            <p className="text-lg text-justify font-open-sans mt-12 mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae repellat facilis animi quae consequatur facere rem error cupiditate, fuga cum, sit nisi sequi sapiente dicta eveniet incidunt! Voluptas vitae laborum dolor deleniti ea in nobis non sit possimus asperiores! Voluptate eveniet modi asperiores quidem neque suscipit officia consequatur corporis dolores? Dolores odit voluptatum alias nemo distinctio at impedit non, placeat vero aut libero mollitia doloribus maxime, voluptatibus, iste error commodi explicabo vitae nobis eveniet a soluta? Dolores, voluptate, debitis molestias nesciunt veniam natus illo nam repudiandae quis rem totam quam iste tempore aliquam dolore quae et ex perferendis velit magni.</p>
        </div>
      </div>
    </>
  )
}
