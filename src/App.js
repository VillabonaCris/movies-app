import { MoviesGrid } from "./components/MoviesGrid"
import style from './stylesheets/App.module.css'



export const App = () => {
  return(
    <div>
      <header>
        <h1 className={style.title}>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  )
}

