
import MovieP from "@/components/movie"
import { Props } from "@/interfaces/interfaces"


function MoviePage({ params }: { params: Props }) {

  return (
    <MovieP params={params} />
  )
}

export default MoviePage