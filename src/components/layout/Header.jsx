import React from 'react'
import {FaSearch, FaShoppingBag, FaUser, FaRegHeart} from 'react-icons/fa'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex items-center justify-between p-2 z-[100] w-full absolute bg-[#4bae4f] px-16'>

        <Link to='/'>
            <h1 className='text-white text-4xl font-bold cursor-pointer'>
                Organic Express
            </h1>
        </Link>
        {/* <div className="flex">
            <div className="w-full">
                <input type="text" placeholder="Search" className="input w-96 bor bg-[#ebeff1]" />
            </div>
        
        </div> */}
        <form className="w-96 px-4">
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-[#ebeff1] focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
        <div>
            <Link to='/login'>
            <button className='text-white pr-4'>Sign In</button>
            </Link>
            <Link to='/signup'>
            <button className='bg-[#2f7d32] px-6 py-2 rounded cursor-pointer text-white uppercase font-bold'>Sign Up</button>
            </Link>
        </div>

    </header>
    // <header className="flex w-full h-[80px] items-center justify-between p-4 px-16 bg-gray-100">
    //     <div className="flex">
    //         <Link to='/'>
    //             <h2 className="text-lg font-bold">Organic Express</h2>
    //         </Link>
    //     </div>
    //     <div className="flex">
    //         <div className="w-full">
    //             <input type="text" placeholder="Search" className="input w-96 border-red-200" />
    //         </div>
            
    //     </div>
    //     <div className="flex justify-between">
    //         <FaSearch />
    //         <FaRegHeart className='mx-2'/>
    //         <FaShoppingBag className='mx-2'/>
    //         <FaUser className='mx-2'/>
    //     </div>

    // </header>
 
  )
}

export default Header