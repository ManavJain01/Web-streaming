// Import React Redux Packages
import {useSelector} from "react-redux";

// Importing Hooks
import useMovieById from '../../../hooks/useMovieById';


export default function VideoBackground({movieId,bool}) {
  // React Redux
  const trailerMovie = useSelector(store=>store.movie.trailerMovie);
  
  // my custom hooks
  useMovieById(movieId);

  return (
    <div className='w-[vw] overflow-hidden'>
      <iframe
        className={`${bool ? "w-[100%]" : "w-screen aspect-video" } border-0`}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player"
        allowFullScreen>
      </iframe>
    </div>
  )
}