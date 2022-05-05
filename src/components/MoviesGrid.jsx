import movies from '../movies.json'
import { MovieCard } from './MovieCard'
import style from '../stylesheets/MoviesGrid.module.css'



export const MoviesGrid = () =>{
  return(
    <ul className={style.grid}>
      {movies.map( movie => <MovieCard key={movie.id} movie={movie} image={movie.poster_path} />)}
    </ul>
  )
}