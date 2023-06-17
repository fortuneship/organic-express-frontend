import React from 'react'
import img1 from '../assets/images/category/category-1.jpg'
import img2 from '../assets/images/category/category-2.jpg'
import img3 from '../assets/images/category/category-3.jpg'
import img4 from '../assets/images/category/category-4.jpg'
import img5 from '../assets/images/category/category-5.jpg'
import img6 from '../assets/images/category/category-6.jpg'

const Category = () => {
  return (
    <div className='bg-[#ebeff1]'>
    <div className="max-w-screen-2xl mt-0 mb-0 ml-auto mr-auto overflow-auto py-16">
  <h2 className="text-2xl font-medium text-[#2f362f] uppercase mb-6">
    shop by category
  </h2>
  <div className="grid grid-cols-6 gap-3">
    <div className="relative rounded-sm overflow-hidden group">
      <img
        src={img1}
        alt="category 1"
        className="w-full"
      />
      <a
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        Fruits
      </a>
    </div>
    <div className="relative rounded-sm overflow-hidden group">
      <img
        src={img2}
        alt="category 1"
        className="w-full"
      />
      <a
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        Vegetables
      </a>
    </div>
    <div className="relative rounded-sm overflow-hidden group">
      <img
        src={img3}
        alt="category 1"
        className="w-full"
      />
      <a
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        Grains and Cereals
      </a>
    </div>
    <div className="relative rounded-sm overflow-hidden group">
      <img
        src={img4}
        alt="category 1"
        className="w-full"
      />
      <a
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        Legumes
      </a>
    </div>
    <div className="relative rounded-sm overflow-hidden group">
      <img
        src={img5}
        alt="category 1"
        className="w-full"
      />
      <a
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        Dairy Products
      </a>
    </div>
    <div className="relative rounded-sm overflow-hidden group">
      <img
        src={img6}
        alt="category 1"
        className="w-full"
      />
      <a
        href="#"
        className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
      >
        Poultry and Eggs
      </a>
    </div>
  </div>
</div>
</div>
  )
}

export default Category