import React from 'react'

function Header() {
  return (


    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href={"/?genre=fetchPopular&page=1"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl font-bold whitespace-nowrap dark:text-white">Inlaze</span>
        </a>

        <div className=" w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col  p-0  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="/favoritos" className="block py-2 px-3 font-bold   rounded bg-transparent text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Tus Favoritas</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header