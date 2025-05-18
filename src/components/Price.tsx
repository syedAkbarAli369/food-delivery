

"use client"

import { useEffect, useState } from "react";

type Props = {
    price: number;
    options?: { title: string; additionalPrice: number }[];
}

const Price = ({price, options}: Props) => {

  const [total, setTotal] = useState(price);  
  const [quantity, setQuantity] = useState(1);  
  const [selected, setSelected] = useState(0); 
  
  useEffect(() => {
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
  }, [quantity, selected])

  return (
    <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
        {/* OPTIONS CONTAINER */}
        <div className="flex gap-3">
            {options?.map((option, index) => (
                <button key={index}  className="p-2 ring-2 ring-yellow-300 rounded-lg text-black min-w-[6rem]" 
                style={{
                    background: selected === index ? "rgb(253, 224, 71)" : "white"
                }}   
                onClick={() => setSelected(index)} 
                >{option.title}</button>
            ))}
        </div>
        {/* QUANTITY AND ADD BUTTON CONTAINER */}
        <div className="flex justify-between items-center">
            {/* QUANTITY */}
            <div className="flex justify-between w-full p-3 ring-2 ring-yellow-300">
                <span>Quantity</span>
                <div className="flex gap-3 items-center text-xl">
                    <button className="cursor-pointer" onClick={() => setQuantity((q) => q > 1 ? q - 1 : 1 )}>{'<'}</button>
                    <span>{quantity}</span>
                    <button className="cursor-pointer" onClick={() => setQuantity((q) => q < 9 ? q + 1 : 9)}>{'>'}</button>
                </div>
            </div>
            {/* CART BUTTON */}
            <button className="uppercase bg-yellow-300 ring-2 ring-yellow-300 p-2 rounded-lg text-black ml-3">Add to Cart</button>
        </div>
    </div>
  )
}

export default Price