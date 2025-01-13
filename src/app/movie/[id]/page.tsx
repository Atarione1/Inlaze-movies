"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export interface Props {
  params: {
    id: string;
  },
}
interface Movie {
  adult:boolean
  backdrop_path:string
  genres:{
    id:number
    name:string
  }
  homepage:string
  id:number
  imdb_id:string
  original_title:string
  overview:string
  popularity:number
  poster_path:string
  release_date:string
  runtime:number
  tagline:string
  title:string
  vote_average:number
  vote_count:number


}
function MoviePage({params}:Props) {
  const [data, setData] = useState<Movie | any>()
  const router = useRouter()
    const movieID = params?.id

    useEffect(() => {
        getPage()
      }, [movieID])
    
      
      async function getPage() {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=3f4a8813d3e5266b03f1c043363d3337&language=es`)
      const dataa = await res.json()
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      await setData(dataa)
       
      }
  return (
    <div className='w-screen bg-gray-100 h-screen '>
      {data ?  <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path
        }`}
        width={500}
        height={300}
        alt=''
        className='rounded-lg'
        style={{ maxWidth: '100%', height: '100%' }}
      ></Image>
      
      <div className='p-2'>
        <h2 className='text-lg mb-3 font-bold'>
          {data.title || data.name}
        </h2>
        <p className='text-lg mb-3'>{data.overview}</p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Fecha de lanzamiento:</span>
          {data.release_date || data.first_air_date}
        </p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>Rating:</span>
          {data.vote_average}
        </p>
        <p className='mb-3'>
          <span className='font-semibold mr-1'>run time:</span>
          {data.runtime}min
        </p>
        <p className='mb-3 flex'>
          <span className='font-semibold mr-1'>votos:</span>
          {data.vote_count}
        </p>
        <p className='mb-3 flex'>
          <span className='font-semibold mr-1'>Generos:</span>
          {data.genres.map((gen:any,i)=>(
            <div key={i} className='mx-2 font-semibold text-blue-700'>
              <h1>{gen.name} </h1>
            </div>
          ))}
        </p>
      </div>
    </div> :
    <div className='text-center mt-10'>
      <h1>No se encontro Infomacion detallada sobre esta pelicula.</h1>
      <button className='text-white bg-black rounded-lg w-20 h-10' onClick={()=> router.push("/?genre=fetchPopular")} >
        Volver
      </button>
    </div> }
   
  </div>
  )
}

export default MoviePage