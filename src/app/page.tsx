"use client";
import Pagination from '@/components/pagination';
import { page } from '@/interfaces/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


export default function Home() {
  const [data, setData] = useState<[]>([])
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  const page = searchParams.get('page')
  console.log(genre)
  useEffect(() => {
    if (page === null) {
      fgetPage()
    } else {
      getPage()
    }
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
  }
  async function fgetPage() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3f4a8813d3e5266b03f1c043363d3337&language=es&page=1`, options)
    const data = await res.json()
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    setData(data.results)
  }


  return (
    <div>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  bg-gray-100'>
        {data.map((result: page, i) => (
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
        <Pagination />
      </div>
    </div>
  )
}
