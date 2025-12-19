import React from 'react'
import { FaMoon } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Header() {
  function changeMode() {
    document.documentElement.classList.toggle('dark')
  }
  return (
    <header className=' text-3xl text-center  flex fixed top-0 w-full pt-6 pb-6 gap-5 justify-end px-5 bg-gray-300 dark:bg-gray-800 dark:text-white py-3'>
        <NavLink to="/">Profile</NavLink>
        <button onClick={changeMode} className=' cursor-pointer'>
          <FaMoon />
        </button>
    </header>
  )
}
