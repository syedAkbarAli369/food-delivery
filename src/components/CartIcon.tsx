

import Image from "next/image"

const CartIcon = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="relative flex w-8 h-8 md:w-6 md:h-6">
                <Image
                    src="/cart.png"
                    alt="Cart"
                    fill
                    className="object-contain"
                />
            </div>
            <span>Cart (3)</span>
        </div>

    )
}

export default CartIcon