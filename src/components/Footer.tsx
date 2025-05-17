

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-1/2 md:h-24 p-6 lg:px-18 xl:px-27 flex items-center justify-between border-t-2 border-t-yellow-300'>
      <Link href="/" className='font-bold text-xl'>HIGHFEAST</Link>
      <p>© 2025 CheelCompanyLtd. All rights reserved.</p>
    </div>
  )
}

export default Footer