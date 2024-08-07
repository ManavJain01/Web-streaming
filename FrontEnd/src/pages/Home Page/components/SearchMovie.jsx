// Import React Packages
import { useState } from 'react'

// Import React Redux Packages
import {useDispatch, useSelector} from "react-redux";
import { setSearchMovieDetails } from '../../../redux/searchSlice';
import { setLoading } from '../../../redux/userSlice';

// Importing Other Packages
import axios from "axios";

// Importing Local Files
import { SEARCH_MOVIE_URL, options } from '../../../utils/constant';
import MovieList from './MovieList'


export default function SearchMovie() {
  // UseStates
  const [searchMovie, setSearchMovie] = useState("");
  
  // React Redux
  const dispatch = useDispatch();
  const isLoading = useSelector(store=>store.app.isLoading);
  const { movieName, searchedMovie } = useSelector(store => store.searchMovie);

  // Functions
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  }

  return (
    <div className="flex flex-col gap-10">
      <div className='flex justify-center pt-[10%] w-[100%]'>
        <form onSubmit={submitHandler} className='w-[50%]'>
          <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
            <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='w-full outline-none rounded-md text-lg' type="text" placeholder='Search Movies...' />
            <button className='bg-red-800 text-white rounded-md px-4 py-2'>{isLoading ? "loading..." : "Search"}</button>
          </div>
        </form>
      </div>

      <div className="text-center">{
        searchedMovie ? ( <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
      }</div>
    </div>
  )
}