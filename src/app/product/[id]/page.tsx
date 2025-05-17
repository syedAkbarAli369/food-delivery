

import Price from "@/components/Price"
import { singleProduct } from "@/data"
import Image from "next/image"

const SingleProductPage = () => {
  return (
    <div className='p-3 lg:px-20 xl:px-40 h-screen flex justify-around md:flex-row flex-col dark:text-yellow-300 md:items-center'>
      {/* IMAGE CONTAINER */}
      {
        singleProduct && <div className="relative w-full h-1/2">
          <Image src={singleProduct.img} alt="" fill className="object-contain object-center" />
        </div>
      }
      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-3">
        <h1 className="text-3xl font-bold uppercase ">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  )
}

export default SingleProductPage