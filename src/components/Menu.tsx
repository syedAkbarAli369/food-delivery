
'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import CartIcon from "./CartIcon"

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
]

const Menu = () => {

  const [open, setOpen] = useState(false);

  const user = false;

  return (
    <div>
      <div>
        {
          open ? (
            <Image
              onClick={() => setOpen(false)}
              src="/close.png"
              alt="Close"
              width={27}
              height={27}
            />
          ) :
            <Image
              onClick={() => setOpen(true)}
              src="/open.png"
              alt="Open"
              width={27}
              height={27}
            />
        }
      </div>
        {
          open && (
            <div className="flex items-center justify-center gap-9 flex-col text-3xl bg-yellow-300 text-black absolute  left-0 top-19 w-full h-[calc(100vh-6rem)] z-9">
            {
              links.map((link) => (
                <Link href={link.url} key={link.id} onClick={() => setOpen(true)}>
                  {link.title}
                </Link>
              ))
            }
            {
              !user ? (
                <Link href="/login">Login</Link>
              ) : (
                <Link href="/orders">Orders</Link>
              )
            }
            <Link href="/cart">
              <CartIcon />
            </Link>
            
          </div>
          )
        }
    </div>

  )
}

export default Menu