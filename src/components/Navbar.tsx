
"use client"
import CartIcon from './CartIcon';
import Menu from './Menu'
import Link from 'next/link'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = () => {

  const user = false;

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme:dark)').matches;

    if(savedTheme){
      setTheme(savedTheme)
    }

    else if(systemPrefersDark){
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme)
  }, [theme]);

  function toggleTheme(){
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return ( 
    <div className='h-12 flex items-center justify-between border-b-2 border-b-yellow-300 font-bold uppercase p-6 md:h-24 '>
        <div className='hidden md:flex gap-4 '>
          <Link href="/" className='dark:text-white'>Home</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className='text-2xl  md:font-bold flex-1 md:text-center'>
            <Link href="/">HighFeast</Link>
        </div>
        <div className='md:hidden'>
            <Menu />
        </div>
        <button onClick={toggleTheme} className='m-3'>
          {
            theme === "dark" ? (
              <span><Sun /></span>
            ) : (
              <span><Moon /></span>
            )
          }
        </button>

        <div className='hidden md:flex gap-4 items-center  justify-end'>
          <div className=' lg:static flex items-center gap-2 cursor-pointer bg-yellow-300  p-1 rounded-lg'>
            <Image src="/phone.png" alt='phone' width={27} height={27}/>
            <p className='text-black'>0369-4206969</p>
          </div>
          {
            !user ? (
              <Link href="/login">Login</Link>
              
            ): (
              <Link href="/orders">Orders</Link>
            )
          }
          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>

    </div>
  )
}

export default Navbar