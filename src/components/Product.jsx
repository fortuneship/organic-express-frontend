import React from 'react'
import product1 from '../assets/images/products/product1.jpg'
import product2 from '../assets/images/products/product2.jpg'
import product3 from '../assets/images/products/product3.jpg'
import product4 from '../assets/images/products/product4.jpg'
import product5 from '../assets/images/products/product5.jpg'
import product6 from '../assets/images/products/product6.jpg'
import product7 from '../assets/images/products/product7.jpg'
import product8 from '../assets/images/products/product8.jpg'
import product9 from '../assets/images/products/product9.jpg'
import product10 from '../assets/images/products/product10.jpg'
import product11 from '../assets/images/products/product11.jpg'
import product12 from '../assets/images/products/product12.jpg'

import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
 //import { FaSearch, FaHeart, FaRegHeart, FaMagnifyingGlass, FaStar } from 'react-icons/fa'

// import {Link} from 'react-router-dom'


const Product = () => {
  return (
    <div className="max-w-screen-xl mt-0 mb-0 ml-auto mr-auto overflow-auto py-16 pb-16">
  <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
    products
  </h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img
          src={product1}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Apple
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
            <div className='flex'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            {/* <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span> */}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-[#4bae4f] border border-primary rounded-b hover:bg-[#81c683]"
      >
        Add to cart
      </a>
    </div>
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img
          src={product2}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Tomatoes
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
          <div className='flex'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            {/* <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span> */}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-[#4bae4f] border border-primary rounded-b hover:bg-[#81c683]"
      >
        Add to cart
      </a>
    </div>
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img
          src={product3}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Corn
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
          <div className='flex'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            {/* <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span> */}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-[#4bae4f] border border-primary rounded-b hover:bg-[#81c683]"
      >
        Add to cart
      </a>
    </div>
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img
          src={product4}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Soya Beans
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
          <div className='flex'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            {/* <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span> */}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-[#4bae4f] border border-primary rounded-b hover:bg-[#81c683]"
      >
        Add to cart
      </a>
    </div>
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img
          src={product5}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Goat
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
          <div className='flex'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            {/* <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span> */}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-[#4bae4f] border border-primary rounded-b hover:bg-[#81c683]"
      >
        Add to cart
      </a>
    </div>
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img
          src={product6}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Egg
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
          <div className='flex'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            {/* <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span> */}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-[#4bae4f] border border-primary rounded-b hover:bg-[#81c683]"
      >
        Add to cart
      </a>
    </div>
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img
          src={product7}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Beef
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
          <div className='flex'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            {/* <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span> */}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-[#4bae4f] border border-primary rounded-b hover:bg-[#81c683]"
      >
        Add to cart
      </a>
    </div>
    <div className="bg-white shadow rounded overflow-hidden group">
      <div className="relative">
        <img
          src={product8}
          alt="product 1"
          className="w-full"
        />
        <div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
              justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
        >
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="view product"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </a>
          <a
            href="#"
            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            title="add to wishlist"
          >
            <i className="fa-solid fa-heart" />
          </a>
        </div>
      </div>
      <div className="pt-4 pb-3 px-4">
        <a href="#">
          <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
            Carrot
          </h4>
        </a>
        <div className="flex items-baseline mb-1 space-x-2">
          <p className="text-xl text-primary font-semibold">$45.00</p>
          <p className="text-sm text-gray-400 line-through">$55.90</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-1 text-sm text-yellow-400">
          <div className='flex'>
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            {/* <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span>
            <span>
              <i className="fa-solid fa-star" />
            </span> */}
          </div>
          <div className="text-xs text-gray-500 ml-3">(150)</div>
        </div>
      </div>
      <a
        href="#"
        className="block w-full py-1 text-center text-white bg-[#4bae4f] border border-primary rounded-b hover:bg-[#81c683]"
      >
        Add to cart
      </a>
    </div>
  </div>
</div>

  )
}

export default Product