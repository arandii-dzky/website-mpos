"use client"
import { useState } from "react"

import { Button } from '@/components/ui/button';
import React from 'react'


export const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <header className="">
      <div className="w-full px-10 py-3 flex items-center justify-between">
        {/* LOGO + MPOS bg-[#A40000]*/}
        <div className="flex items-center gap-6 p-2">
          <img className="h-12 sm:h-12 md:h-16 lg:h-20 w-auto" src="mpos.png"/>
        </div>

        {/* HOME ORGANISASI EVENTS */}
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-12 font-semibold">
          <div> 
            <a className=' text-black text-muted-foreground hover:text-accent-foreground block duration-150 hover:text-red-700 cursor-pointer' href="#">Home</a>
            </div>
          <a className=' text-black text-muted-foreground hover:text-accent-foreground block duration-150 hover:text-red-700 cursor-pointer' href="#">Struktur Organisasi</a>
          <a className=' text-black text-muted-foreground hover:text-accent-foreground block duration-150 hover:text-red-700 cursor-pointer' href="#">Events</a>
        </nav>

        {/* Hamburger Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 font-semibold text-white bg-black p-2">
          <a href="#">Home</a>
          <a href="#">Struktur Organisasi</a>
          <a href="#">Events</a>
        </div>
      )}
    </header>
    </>
  )
}

