import React from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import logo from "@/assets/image/logo.png"

const menuItems = [
  {
    name: 'About Us',
    href: '#',
  },
  {
    name: 'Products',
    href: '#',
  },
  {
    name: 'Join Us',
    href: '#',
  },
  {
    name: 'Contact Us',
    href: '#',
  },
]

export default function NavBar() {
  return (
    <div className="relative w-full bg-nav-background text-nav-text">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-3">
          <span>
            <Image
              src={logo}
              className='h-[40px] w-[40px] md:h-[50px] md:w-[50px]'
              alt='logo'
            />
          </span>
          <span className="font-bold font-open-sans text-sm md:text-base">JU PRODUCT<br></br>CLUB</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-base uppercase font-open-sans font-semibold text-nav-menu-text"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <Menu className="h-6 w-6 cursor-pointer" />
        </div>

      </div>
    </div>
  )
}
