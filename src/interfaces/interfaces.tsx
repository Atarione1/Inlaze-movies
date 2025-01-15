export interface page {
  id: number
  title: string
  name: string
  release_date: string
  first_air_date: string
  poster_path: string
  backdrop_path: string
}

export type Props = Promise<{ id: string }>
export interface Genero {
  id: number
  name: string
}
export interface Movie {
  adult: boolean
  backdrop_path: string
  genres: {
    id: number
    name: string
  }
  homepage: string
  id: number
  imdb_id: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  runtime: number
  tagline: string
  title: string
  vote_average: number
  vote_count: number


}