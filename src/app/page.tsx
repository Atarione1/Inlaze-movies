"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<[]>([])
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  const page = searchParams.get('page')
  const cont = parseInt(page, 10)
  useEffect(() => {
    getPage()
  }, [genre])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjRhODgxM2QzZTUyNjZiMDNmMWMwNDMzNjNkMzMzNyIsIm5iZiI6MTczNjcwMjYyMi41NjgsInN1YiI6IjY3ODNmYTllMDY5MGFjMDZlNzdiNWNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CUy4WLDOaQaoFZ-LHj41Q2B04srCDPi4o8Xy0-t3esM'
    }
  };
  async function getPage() {
    const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : genre === 'fetchTrending' ? '/trending/all/week' : `/movie/popular`}?api_key=3f4a8813d3e5266b03f1c043363d3337&language=es&page=${page}`, options)
    const data = await res.json()
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    setData(data.results)
    console.log(data.results)
  }




  return (
    <div>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  bg-gray-100'>
        {data.map((result: any, i) => (
          <div className='my-0 sm:my-5 ' key={i}>
            <Link href={`/movie/${result.id}`}>
              <div className='flex-col sm:grid sm:grid-cols-2 gap-x-2 justify-between sm:my-1 text-center w-full'>
                <div className='sm:text-start font-bold  sm:pl-4'>
                  <h1>{result.name || result.title}</h1>
                </div>
                <div className=' sm:text-right sm:mx-2 text-gray-400'>
                  <h1>{result.release_date || result.first_air_date} </h1>
                </div>
              </div>
              <div className='mx-auto container '>

                <div className='rounded-lg rounded-b-lg mx-5 sm:mx-auto'>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${result.poster_path || result.backdrop_path}`}
                    width={500}
                    height={300}
                    alt=''
                    className='rounded-lg hover:opacity-75 transition-opacity duration-300'
                  />
                </div>

              </div>

            </Link>
          </div>
        ))}
      </div>
      <div>


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
      </div>
    </div>
  )
}
