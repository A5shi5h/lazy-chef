import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
      <div className='about bg-[#020617] h-auto w-full block md:flex' id='about'>
        <div className='h-[300px] w-full md:w-1/2 sm:h-[500px] flex justify-center items-center'> 
            <Image src='./images/img1.jpg' alt='image-1'
             className='p-6 '
             width={800}
             height={400}
            />
        </div>
        <div className='h-auto w-full md:w-1/2 flex justify-center items-center'>
            <div className='about-container h-auto  w-[93vw] md:w-[40vw] p-2'>
                <h3 className='text-center text-2xl text-white font-bold'>About</h3>
                <p className='text-slate-400 text-justify p-6 tracking-tighter leading-normal '>Welcome to <span className='font-bold text-white'>Lazy Chef</span>, the newest culinary gem in town! Nestled in the heart of the city, <span className='font-bold text-white'>Lazy Chef is a cozy yet vibrant restaurant</span> that promises to tantalize your taste buds and soothe your soul with its delightful fusion of flavors and laid-back ambiance.
At <span className='font-bold text-white'>Lazy Chef</span>, we believe in the art of simplicity and letting the ingredients speak for themselves. Step inside and <span className='font-bold text-white'>feel the stresses of the day melt away as you're enveloped in the warm</span>, inviting atmosphere. Whether you're dining solo, catching up with friends, or enjoying a romantic evening out, our friendly staff are here to ensure that your experience is nothing short of exceptional.
So why wait? Come join us at <span className='font-bold text-white'>Lazy Chef</span> and indulge in a culinary journey like no other. Sit back, relax, and let us take care of the rest.<span className='text-white font-bold'>After all, life's too short to rush through a meal.</span></p>
            </div>
        </div>
      </div>
    </>
  )
}

export default About
