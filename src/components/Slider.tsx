
"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

const data = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot",
        image: "/slide1.png"
    },
    {
        id: 2,
        title: "we deliver your order where ever you are in Karachi",
        image: "/slide2.png"
    },
    {
        id: 3,
        title: "the best pizza to share with your family",
        image: "/slide3.jpg"
    },
]

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prev) => prev === data.length - 1 ? 0 : prev + 1)
    }, 2000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className='flex flex-col  h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row gap-3'>
        {/* TEXT CONTAINER */}
        <div className='flex-1 h-1/2 flex items-center justify-center flex-col gap-6 font-bold lg:h-full'>
            <h1 className="text-3xl text-center uppercase p-1  md:text-4xl xl:text-5xl">
                {data[currentSlide].title}
            </h1>
            <button className="bg-yellow-300 text-black py-4 px-9 rounded-lg">Order Now</button>
        </div>

        {/* IMAGe CONTAINER */}
        <div className="flex-1 w-full aspect-[16/9] relative lg-mt-27">
            <Image src={data[currentSlide].image} alt="Slide" fill className="object-cover object-center"/>
        </div>
    </div>
  )
}

export default Slider