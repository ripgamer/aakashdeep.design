import React from 'react'

function Navbar() {
  return (
    

<nav class="border-gray-200 bg-gray-50 dark:bg-black dark:border-black">
  <div class="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/img/logo.png" class="h-15" alt="Logo" />
    
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg width="32" height="30" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H30" stroke="white" stroke-width="4" stroke-linecap="round"/>
<path d="M2 10H30" stroke="white" stroke-width="4" stroke-linecap="round"/>
<path d="M2 18H30" stroke="white" stroke-width="4" stroke-linecap="round"/>
</svg>

    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-black md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-white bg-black rounded md:bg-transparent md:text-black md:dark:text-white dark:bg-black md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar