import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function RenderingCard(data: any) {
  return (
    <div><div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  bg-gray-100'>
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
    </div></div>
  )
}

export default RenderingCard