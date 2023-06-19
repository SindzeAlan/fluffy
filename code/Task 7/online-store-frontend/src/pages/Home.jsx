import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className='hero w-full h-72'>
        <div className="container flex flex-col h-full space-y-6 items-center justify-center mx-auto">
          <h2 className="text-white font-bold text-4xl md:max-w-xl">
            Find the perfect product,no matter what you're looking for
          </h2>
          <p className=" text-white text-center max-w-xl">
            Our marketplace is home to a variety of products, from clothing and electronics to home goods and travel.We have something for everyone,so you're sure to find what you're looking for
          </p>
        </div>
      </div>

      <div className="px-4 my-3">
        <h1 className="text-4xl">
          Recently added
        </h1>
        <div className="flex">
          
        </div>
      </div>
    </div>
  )
}
