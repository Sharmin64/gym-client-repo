import React from 'react';


const Home = () => {
  return (
    <div>
      <div className='relative flex items-center justify-evenly h-screen'>
        <button className=" bg-blue-500  text-red-600 border-teal-300 border-spacing-4 px-12 py-6 rounded-full hover:text-amber-300 group relative flex items-center overflow-hidden font-medium ">
          <span className='absolute top-0 w-full h-0 transition-all bg-zinc-600 opacity-100 group-hover:h-full group-hover:top-0 duration-300 ease-in-out'></span>
          <span className='relative'>Hover me!</span>
      </button>
   </div>
    
   
    </div>
  );
};

export default Home;