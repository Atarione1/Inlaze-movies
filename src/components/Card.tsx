import { useSearchParams } from 'next/navigation'
import React from 'react'

export function Card(result: any) {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  return (
    <div className=' text-black' >
      {genre === 'fetchTrending' ?
        <div>{result.name} </div> : <div>{result.title} </div>}


    </div>
  )
}

export default Card