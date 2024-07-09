// Import React Redux Packages
import {useSelector} from "react-redux";

// Importing Local Files
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground';

export default function MainContainer() {
  // React Redux
  const movie = useSelector(store=>store.movie?.nowPlayingMovies);
  if(!movie) return; // early return in react
 
  const {overview, id, title} = movie[4];

  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}