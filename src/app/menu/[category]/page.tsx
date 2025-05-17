

import { pizzas } from '@/data'
import Link from 'next/link'
import Image from 'next/image'

const Category = () => {
  return (
    <div className='flex flex-wrap'>
      {
        pizzas.map((pizza) => (
          <Link href={`/product/${pizza.id}`}  key={pizza.id} className='w-full h-[63vh] border-r-2 border-b-2 border-yellow-300 sm:w-1/2 lg:w-1/3 p-3 flex flex-col justify-between group'>
            {/* IMAGE CONTAINER */}
            {
              pizza.img && <div className='relative h-[72%] mt-2'>
                <Image src={pizza.img} alt='pizza' fill className='object-contain'/>
              </div>
            }
            {/* TEXT CONTAINER */}
            <div className='flex justify-between items-center font-bold'>
              <h1 className='text-2xl uppercase p-2'>{pizza.title}</h1>
              <h2 className='group-hover:hidden text-lg'>${pizza.price}</h2>
              <button className='bg-yellow-300 hidden group-hover:block text-black p-2 rounded-lg '>Add to Cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default Category