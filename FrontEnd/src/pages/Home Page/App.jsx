// Import React Packages
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"

// Import React Redux Packages
import {useSelector} from "react-redux";
import { setLoading, setUser } from '../../redux/userSlice';

// Importing Chakra Components
import {Box, Button} from '@chakra-ui/react'

// Importing Hooks
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies';
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';
import useUpcomingMovies from '../../hooks/useUpcomingMovies';

// Importing Local Files
import MainContainer from './components/MainContainer';
import MovieContainer from './components/MovieContainer';
import SearchMovie from './components/SearchMovie';

function App() {
  // React-Router-Dom
  const navigate = useNavigate();

  // React Redux
  const user = useSelector(store => store.app.user);
  const toggle = useSelector(store => store.movie.toggle);

  // my custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // UseEffect
  useEffect(() => {
    if (!user) {
        navigate("/");
    }
}, []);

  return (
    <div className='min-h-lvh pt-32'>
      {
        toggle ? <SearchMovie /> : (
          <>
            <MainContainer />
            <MovieContainer />
          </>

        )
      }
    </div>
  )
}

export default App
