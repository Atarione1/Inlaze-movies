"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export interface Props {
  params: {
    name: string;
  },

}

export function SearchPage({params}: Props) {
  const [data, setData] = useState<[]>([])
  const searchTerm = params?.name

  useEffect(() => {
    getPage()
  }, [searchTerm])

  
  async function getPage() {
  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=3f4a8813d3e5266b03f1c043363d3337&query=${searchTerm}&language=es&page=1&include_adult=false`)
  const dataa = await res.json()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
   setData(dataa.results)
   
  }
  
  return (
    <div>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  bg-gray-100'>
        {data.map((result: any, i) => (
          <div className='my-0 sm:my-5 ' key={i}>
            <Link href={`/movie/${result.id}`}>
              <div className='flex-col sm:grid sm:grid-cols-2 gap-x-2 justify-between sm:my-1 text-center w-full'>
                <div className='sm:text-start font-bold  sm:pl-4'>
                  <h1>{result.name}</h1>
                  <h1>{result.title}</h1>
                </div>
                <div className=' sm:text-right sm:mx-2 text-gray-400'>
                  <h1>{result.release_date} </h1>
                  <h1>{result.first_air_date} </h1>
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
    </div>
  )
}

export default SearchPage