// Import React Redux Packages
import {useSelector} from "react-redux";

// Importing Local Files
import MovieList from './MovieList'

export default function MovieContainer() {
  // React Redux
  const movie = useSelector(store=>store.movie);

  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10' >
        <MovieList title={"Popular Movies"} movies={movie.popularMovie}/>
        <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Top Tated Movies"} movies={movie.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      </div>
    </div>
  )
}