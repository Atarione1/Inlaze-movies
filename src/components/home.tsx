"use client"
import { page } from "@/interfaces/interfaces"
import Image from "next/image"
import Link from "next/link"
import PaginationPage from "./pagination"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"

export default function Home() {
  const [data, setData] = useState<[]>([])
  //# definir useSearchParams para obtener los query de paginado y tipo de consulta
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  const page = searchParams.get('page')

  //# useEffect para inciar la pagina y cargar las peliculas 
  useEffect(() => {
    if (page === null) {
      firstgetPage()
    } else {
      getPage()
    }
  }, [genre])
  //#opciones adicionales para llamar al servicio de Tmdb
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjRhODgxM2QzZTUyNjZiMDNmMWMwNDMzNjNkMzMzNyIsIm5iZiI6MTczNjcwMjYyMi41NjgsInN1YiI6IjY3ODNmYTllMDY5MGFjMDZlNzdiNWNlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CUy4WLDOaQaoFZ-LHj41Q2B04srCDPi4o8Xy0-t3esM'
    }
  };
  //# funcion asincrona para llamar al servicio tmdb por primera vez setear la data
  async function firstgetPage() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3f4a8813d3e5266b03f1c043363d3337&language=es&page=1`, options)
    const data = await res.json()
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    setData(data.results)
  }
  //# funcion asincrona para llamar al servicio tmdb segun la categoria que se desea y setear la data
  async function getPage() {
    //# por alguna razon no dejaba utilizar las variables de entorno con el prosses.env
    const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : genre === 'fetchTrending' ? '/trending/all/week' : `/movie/popular`}?api_key=3f4a8813d3e5266b03f1c043363d3337&language=es&page=${page}`, options)
    const data = await res.json()
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    setData(data.results)
  }

  return (
    <div>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  bg-gray-100'>
        {data.map((result: page, i: number) => (
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
        <PaginationPage />
      </div>
    </div>
  )
}
