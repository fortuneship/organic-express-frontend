import React from 'react'
import Image from '../assets/images/banner.jpg'


const Banner = () => {
  return (
    <div className="text-white bg-cover bg-no-repeat bg-center py-36 object-cover object-center justify-center w-full" style={{

        background: `url(${Image})`, backgroundRepeat:"no-repeat",
   
      }}>
   
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
   
          {/* <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center" alt="hero" src={Image} /> */}
   
          <div class="text-center lg:w-8/12 w-full">
   
            <h1 className="my-4 text-5xl font-bold leading-tight">
   
            Your Ultimate Destination for Convenient Organic Shopping
   
            </h1>
   
            <p className="text-2xl mb-8">
   
            Explore a vast range of organic products, including fresh produce, pantry staples, snacks, beverages, personal care items, and much more
   
            </p>
   
            <div className="flex justify-center mx-auto">
   
              <button
   
                className="hover:bg-[#81c683] bg-[#4bae4f] text-white font-bold py-4 px-8 uppercase">
   
                View Projects
   
              </button>
   
              {/* <button
   
                className="ml-4 hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8">
   
                Plugins
   
              </button> */}
   
            </div>
   
          </div>
   
        </div>
   
      </div >
    // <div className="bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage: `url(${Image})`,}}>
    //     <div className="container">
    //         <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
    //             best collection for  home decoration
    //         </h1>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam 
    //             accusantium perspiciatis, sapiente
    //             magni eos dolorum ex quos dolores odio</p>
    //         <div className="mt-12">
    //             <a href="#" className="bg-primary border border-primary text-white px-8 py-3 font-medium 
    //                 rounded-md hover:bg-transparent hover:text-primary">Shop Now</a>
    //         </div>
    //     </div>
    // </div>
  )
}

export default Banner