
import { featuredProducts } from "@/data"
import Image from "next/image"

const Featured = () => {

  return (
    <div className="w-screen mt-12 overflow-x-scroll md:mt-63 lg:mt-36">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {
          featuredProducts.map((item) => (
            <div className="w-screen h-[60vh] flex flex-col items-center justify-center p-3 md:w-[50vw]" key={item.id}>
              {/* IMAGE CONTAINER */}
              <div className="relative flex w-full h-[300px] hover:rotate-[60deg] transition-all duration-300">
                <Image src={item.img} alt="p1" fill className=" object-contain" />
              </div>
              {/* TEXT CONTAINER */}
              <div className="flex flex-1 flex-col items-center text-center gap-3 mt-6">
                <h1 className="text-xl font-bold uppercase">{item.title}</h1>
                <p className="p-2">{item.desc}</p>
                <span className="text-xl font-bold">${item.price}</span>
                <button className="bg-yellow-300 dark:text-black p-2 rounded-lg">Add to Cart</button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Featured