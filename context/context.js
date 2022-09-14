import { createContext, useEffect, useState } from 'react';
import { getMovies } from '../utils/firebase.utlis';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [moviesDetails, setMoviesDetails] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      const moviesData = await getMovies();

      setMoviesDetails(moviesData);
    };
    getMoviesData();
  }, []);

  const filteredMovieInContext = (id) => {
    const result = moviesDetails.filter((x) => x.id === id);
  };

  return (
    <MovieContext.Provider value={{ moviesDetails, filteredMovieInContext }}>
      {children}
    </MovieContext.Provider>
  );
};
