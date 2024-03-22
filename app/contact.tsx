import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='bg-[#020617] mb-10' id='contacts'>
           <h1 className='text-center text-4xl md:text-5xl text-white pt-28'><span className='text-slate-500 font-semibold'>Contact</span> us</h1>
           <br/>
           <div className='socials text-white text-center'>
            <ul className='flex justify-center gap-4 text-sm sm:text-xl'>
              <li className='bg-gradient-to-br from-blue-400 to-blue-600 p-2 rounded-md'>
                <a href='https://www.facebook.com/p/The_lazy_chef_gangtok-100063886307411/'>Facebook</a>
              </li>
              <li className='bg-gradient-to-br from-violet-500 via-purple-500 to-red-500 p-2 rounded-md'>
                <a href='https://www.instagram.com/the_lazy_chef_gangtok/'>Instagram</a>
              </li>
              <li className='bg-gradient-to-br from-green-700 via-green-900 to-green-500 p-2 rounded-md'>
                <a href='https://api.whatsapp.com/send?phone=918509299825'>WhatsApp</a>
              </li>
            </ul>
           </div>
      </div>
    </>
  )
}

export default Contact
