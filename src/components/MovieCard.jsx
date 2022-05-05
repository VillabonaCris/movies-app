import style from '../stylesheets/MovieCard.module.css'

export const MovieCard = ({ movie }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
  return(
    <li className={style.list}>
      <img className={style.movieImg} src={imgUrl} alt={movie.title} />
      <p>{movie.title}</p>
    </li>
  )
}