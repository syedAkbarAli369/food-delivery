

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='p-3 h-[calc(100vh - 6rem)] md:h-[calc(100vh - 9rem)] flex items-center justify-center mt-3 mb-3'>
      {/* BOX */}
      <div className='h-full shadow-2xl rounded-lg flex flex-col p-9 md:flex-row md:h-[70%] md:w-full lg:w-[80%] 2xl:w-1/2'>
        {/* IMAGE CONTAINER */}
        <div className='relative h-63 w-full md:w-1/2 md:h-99'>
          <Image src="/loginBg.png" alt='loginPicture' fill className='object-cover md:object-contain'/>
        </div>
        {/* FORM CONTAINER */}
        <div className='p-9 flex flex-col gap-9 md:1/2'>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <button className='flex gap-3 p-3 ring-2 ring-yellow-300 rounded-lg'>
            <Image src="/google.png" alt='google' width={20} height={20} className='object-contain'/>
            <span>Sign in with Google</span>
          </button>
          <button className='flex gap-3 p-3 ring-2 ring-yellow-300 rounded-lg'>
            <Image src="/facebook.png" alt='google' width={20} height={20} className='object-contain'/>
            <span>Sign in with Facebook</span>
          </button>
          <p className='text-sm'>Have a Problem? <Link href="/contact" className='underline'>Contact Us</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login