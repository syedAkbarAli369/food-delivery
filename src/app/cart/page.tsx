

import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className='h-[calc(100vh - 6rem)] md:h-[calc(100vh - 9rem)] flex flex-col lg:flex-row lg:items-center gap-3'>
      {/* PRODUCT CONTAINER */}
      <div className='h-1/2 p-3 flex flex-col justify-center mb-3 lg:h-full lg:w-2/3 '>
        {/* SINGLE ITEM */}
        <div className='flex items-center justify-between mb-3 bg-yellow-300 p-3'>
          <Image src="/temporary/p1.png" alt='image' width={100} height={100}/>
          <div>
            <h1 className='uppercase font-bold text-xl'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$69.12</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-3 bg-yellow-300 p-3'>
          <Image src="/temporary/p1.png" alt='image' width={100} height={100}/>
          <div>
            <h1 className='uppercase font-bold text-xl'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$69.12</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between bg-yellow-300 p-3'>
          <Image src="/temporary/p1.png" alt='image' width={100} height={100}/>
          <div>
            <h1 className='uppercase font-bold text-xl'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$69.12</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className='h-1/2 p-3 flex flex-col gap-3 justify-center lg:h-full lg:w-1/3 '>
        <div className='flex justify-between'>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$81.45</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Service Cost</span>
          <span className=''>$0.00</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Delivery Cost</span>
          <span className='text-green-600'>FREE!</span>
        </div>
        <hr  className='mt-3'/>
        <div className='flex justify-between mt-3 mb-3'>
          <span className=''>TOTAL(INCL. VAT)</span>
          <span className='font-bold'>$81.45</span>
        </div>
        <button className='bg-yellow-300 p-3 rounded-lg w-1/2 self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart