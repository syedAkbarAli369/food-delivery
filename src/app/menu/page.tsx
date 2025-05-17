

import { menu } from '@/data'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='p-3 lg:px-27 xl:px-45 h-[calc(100vh)] md:h-[calc(100vh - 9rem)] flex flex-col md:flex-row items-center justify-center'>
      {
        menu.map((category) => (
          <Link href={`/menu/${category.slug}`} key={category.id} className='w-full h-1/3 md:h-1/2 bg-center bg-cover p-8' style={{backgroundImage: `url(${category.img})`}}>
            <div className={`text-${category.color} w-1/2`}>
              <h1 className='text-3xl font-bold uppercase'>{category.title}</h1>
              <p className='text-sm mt-3'>{category.desc}</p>
              <button className={`hidden xl:block py-2 px-4 mt-3 bg-black rounded-lg text-yellow-300`}>Explore</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Menu