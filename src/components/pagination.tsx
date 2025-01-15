import { useSearchParams } from 'next/navigation'
import React from 'react'

function Pagination() {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  const page = searchParams.get('page') ?? "1"
  const cont = parseInt(page, 10)
  return (
    <div className=' w-full mx-auto bg-gray-100'>
      <ul className="flex items-center -space-x-px h-10 text-base mx-auto  justify-center ">
        <li>
          <a href={`/?genre=${genre}&page=${cont === 1 ? page : cont - 1}`} className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            <span className="sr-only">Previous</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
          </a>
        </li>
        <li>
          <a href={`/?genre=${genre}&page=1`} className={`flex items-center ${cont === 1 ? "z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} justify-center px-4 h-10 leading-tight `}>1</a>
        </li>
        <li>
          <a href={`/?genre=${genre}&page=2`} className={`flex items-center ${cont === 2 ? "z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} justify-center px-4 h-10 leading-tight `}>2</a>
        </li>
        <li>
          <a href={`/?genre=${genre}&page=3`} className={`flex items-center ${cont === 3 ? "z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} justify-center px-4 h-10 leading-tight `}>3</a>
        </li>
        <li>
          <a href={`/?genre=${genre}&page=4`} className={`flex items-center ${cont === 4 ? "z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} justify-center px-4 h-10 leading-tight `}>4</a>
        </li>
        <li>
          <a href={`/?genre=${genre}&page=5`} className={`flex items-center ${cont === 5 ? "z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"} justify-center px-4 h-10 leading-tight `}>5</a>
        </li>
        <li>
          <a href={`/?genre=${genre}&page=${cont + 1}`} className={"flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>
            <span className="sr-only">Next</span>
            <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination