import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getMovies } from '../utils/firebase.utlis';
import MovieCard from './MovieCard';

const styles = {
  containerStyles: `mb-20 `,
  titleStyles: `text-lg font-bold tracking-wider`,
  contentWrapperStyles: `grid grid-cols-5 gap-2 my-2`,
  contentDivStyles: `border-2 border-[rgba(249,249,249,0.1)] shadow-lg shadow-black cursor-pointer transition-all duration-300 scale-[0.9] relative
  hover:scale-[1] hover:border-white hover:shadow-xl hover:shadow-black leading-none`,
};

const Movies = () => {
  const router = useRouter();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const asyncGetMovie = async () => {
      const moviesData = await getMovies();

      setMovies(moviesData);
    };
    asyncGetMovie();
  }, []);

  const recommendedMovies = movies.filter((x) => x.type === 'recommend');
  const newMovies = movies.filter((x) => x.type === 'new');
  const trendingMovies = movies.filter((x) => x.type === 'trending');
  const originalMovies = movies.filter((x) => x.type === 'original');

  return (
    <div className={styles.containerStyles}>
      <MovieCard movieArray={recommendedMovies} type='Recommended' />
      <MovieCard movieArray={newMovies} type='Latest' />
      <MovieCard movieArray={trendingMovies} type='Trending Now' />
      <MovieCard movieArray={originalMovies} type='Originals' />
    </div>
  );
};

export default Movies;
