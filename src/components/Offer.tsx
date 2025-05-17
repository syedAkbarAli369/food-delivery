
import Image from "next/image"
import Countdown from "./Countdown"

const Offer = () => {
  return (
    <div className='bg-black h-screen mt-9 flex flex-col md:flex-row md:justify-between md:bg-[url("/offerBg.png")] md:h-[70vh]'>
      {/* TEXT CONTAINER */}
      <div className='flex-1 flex flex-col items-center justify-center text-center text-white gap-9 p-6'>
        <h1 className="text-5xl font-bold xl:text-6xl ">Delicious Burger & French Fry</h1>
        <p className="xl:text-xl">Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel</p>
        <Countdown />
        <button className="bg-yellow-300 text-black p-3 rounded-lg">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className='relative w-full flex-1 md:h-full'>
        <Image src="/offerProduct.png" alt="offer" fill className="object-contain"/>
      </div>
    </div>
  )
}

export default Offer