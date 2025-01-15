"use client"
import { Genero, Movie, Props } from '@/interfaces/interfaces';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function MovieP({ params }: { params: Props }) {
  const [data, setData] = useState<Movie | null>()

  const router = useRouter()
  //# obtener objeto dentro del local storage
  const favoritos = localStorage.getItem("favoritos") ?? "[]"
  //# convertir el objeto en json
  const value = JSON.parse(favoritos)
  //# definir useState inicializado con lo que hay en el local storage
  const [fav, setFav] = useState(value)

  //# en este useEffect se setea al localstorage cada vez que fav cambia(cada vez que se agrega una movie a favoritos)
  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(fav))
  }, [fav])
  //# renderizar el detalle de la movie
  useEffect(() => {
    getPage()
    const favo = JSON.parse(localStorage.getItem("favoritos") ?? "[]")
    setFav(favo)
  }, [])

  //# funcion asincrona para llamar el servicio que busca por id de la pelicula
  async function getPage() {
    const { id } = await params
    const movieID = id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=3f4a8813d3e5266b03f1c043363d3337&language=es`)
    const dataa = await res.json()
    //# respuesta si falla la consulta
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    await setData(dataa)

  }
  return (
    <div className='w-screen bg-gray-100 h-[1000px] md:h-screen '>
      {data ? <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path
            }`}
          width={500}
          height={300}
          alt=''
          className='rounded-lg'
          style={{ maxWidth: '100%', height: '100%' }}
        ></Image>

        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>
            {data.title || data?.name}
          </h2>
          <p className='text-lg mb-3'>{data.overview}</p>
          <p className='mb-3'>
            <span className='font-semibold mr-1'>Fecha de lanzamiento:</span>
            {data.release_date || data?.first_air_date}
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
            {data.genres.map((gen: Genero, i: number) => (
              <div key={i} className='mx-2 font-semibold text-blue-700 truncate whitespace-nowrap overflow-ellipsis'>
                <h1>{gen.name} </h1>
              </div>
            ))}
          </p>
          <button className='text-white bg-black rounded-lg w-40 h-10' onClick={() => setFav([...fav, data])} >
            Añadir a favoritos
          </button>
        </div>
      </div> :
        <div className='text-center mt-10'>
          <h1>No se encontro Infomacion detallada sobre esta pelicula.</h1>
          <button className='text-white bg-black rounded-lg w-20 h-10' onClick={() => router.push("/?genre=fetchPopular")} >
            Volver
          </button>
        </div>}

    </div>
  )
}

export default MovieP