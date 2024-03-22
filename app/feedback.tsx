import React from 'react'

const Feedback = () => {
  return (
    <>
      <div className='text-center bg-[#020617] text-white' id='feedback'>
        <h1 className=' text-4xl sm:text-6xl font-bold'>
            Check out <br/><span className='text-4xl sm:text-7xl font-light text-slate-400'> what people have</span> to say about us
        </h1>
        <br/>
        <p className='text-l font-thin sm:text-2xl'>Click on the button below to see feebacks</p>
        <br/>
        <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            <a href='https://en.tripadvisor.com.hk/Restaurant_Review-g23524598-d26306234-Reviews-The_Lazy_Chef-Arithang_Gangtok_East_Sikkim_Sikkim.html'>Feedbacks</a>
        </button>
      </div>
    </>
  )
}

export default Feedback
