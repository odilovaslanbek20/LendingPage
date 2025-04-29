'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

function Lending() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false) 
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className='max-w-full bg-[rgba(255,255,255,0.4)] backdrop-blur-2xl'>
        <div className="max-w-[90%] m-auto flex items-center justify-between gap-[50px]">
          <Link href="/">
            <img className='w-[120px] h-[70px] bg-cover' src="logotip.png" alt="Logo" />
          </Link>

          <div className="hidden min-[860px]:flex items-center gap-[35px]">
            <nav className='flex items-center gap-[35px]'>
              <Link href="#" className='text-[rgba(75,75,75,1)] text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                Главный экран
              </Link>
              <Link href="#" className='text-[rgba(75,75,75,1)] text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                О нас
              </Link>
              <Link href="#" className='text-[rgba(75,75,75,1)] text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                Наши услуги
              </Link>
              <Link href="#" className='text-[rgba(75,75,75,1)] text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                Галерея
              </Link>
              <Link href="#" className='text-[rgba(75,75,75,1)] text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                Контактная информация
              </Link>
            </nav>
          </div>

          <button onClick={toggleMenu} className="min-[860px]:hidden text-[rgba(1,103,138,1)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </header>
        {menuOpen && (
          <div className="min-[860px]:hidden min-w-[320px] max-[350px]:min-w-full fixed h-screen bg-[rgb(180,180,180)] p-4 top-0 left-0 transition-all duration-3000 ease-in-out z-50">
            <button onClick={closeMenu} className="absolute top-4 right-4 text-white text-3xl">
              &times; 
            </button>

            <nav className='flex flex-col items-start gap-4 mt-12'>
              <Link href="#" className='text-white text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                Главный экран
              </Link>
              <Link href="#" className='text-white text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                О нас
              </Link>
              <Link href="#" className='text-white text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                Наши услуги
              </Link>
              <Link href="#" className='text-white text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                Галерея
              </Link>
              <Link href="#" className='text-white text-[15px] font-medium hover:text-[rgba(1,103,138,1)] focus:text-[rgba(1,103,138,1)] transition-all'>
                Контактная информация
              </Link>
            </nav>
          </div>
        )}
    </>
  )
}

export default Lending
