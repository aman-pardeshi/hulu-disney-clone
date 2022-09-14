import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import sampleImage from '../assests/sampleImageDetails.jpg';
import sampleImageTitle from '../assests/sampleImageTitle.png';
import { PlayIcon, UserGroupIcon } from '@heroicons/react/solid';
import { PlusSmIcon } from '@heroicons/react/outline';
import { MovieContext } from '../context/context';
import { getSpecificMovie } from '../utils/firebase.utlis';
import Spinner from '../components/Spinner';

const styles = {
  backgroundContainer: `min-h-[calc(100vh-70px)] text-gray-500 -z-[1] fixed top-0 bottom-0 right-0 left-0 opacity-80`,
  imgStyles: ``,
  imageTitleContainer: `w-[35vw] min-w-[200px] mb-[20px] mt-50`,
  controlStyles: `flex gap-3 sm:text-xl text-sm pl-12`,
  playButtons: `sm:px-4 sm:py-2 px-1 py-1 flex justify-center items-center rounded-sm tracking-widest border-2 border-white`,
  circularButtons: `text-white bg-[rgba(0,0,0,0.5)] rounded-full sm:px-2 px-1 hover:scale-110 border-2 border-transparent hover:border-white`,
  circularIconsStyles: `h-4 sm:h-7 text-sm px-1`,
};

const details = () => {
  const [movieId, setMovieId] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentMovie, setCurrentMovie] = useState({});
  const { filteredMovieInContext } = useContext(MovieContext);

  useEffect(() => {
    getURLData();
  }, [movieId]);

  const getURLData = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setCurrentMovie(await getSpecificMovie(urlParams.get('id')));
    setLoading(false);
  };

  const { backgroundImg, description, subTitle, titleImg } = currentMovie;
  return (
    <>
      {!loading ? (
        <div className='relative min-h-[100vh]'>
          <Header />
          <div className='max-w-2xl detail-title'>
            <div className={styles.backgroundContainer + ' mt-16'}>
              <Image
                src={backgroundImg}
                layout='fill'
                objectFit='cover'
                className={styles.imgStyles}
              />
            </div>

            {/* Div for title of movie which is in image */}
            <div className={styles.imageTitleContainer}>
              <Image
                src={titleImg}
                className={
                  styles.imgStyles + ' object-contain flex justify-start'
                }
                width={550}
                height={250}
              />
            </div>

            <div className={styles.controlStyles}>
              <button
                className={
                  styles.playButtons +
                  ' bg-slate-100 hover:bg-[rgb(149,149,149)]'
                }
              >
                <PlayIcon className='h-4 sm:h-8 ' /> &nbsp; PLAY
              </button>

              <button
                className={
                  styles.playButtons +
                  ' bg-[rgba(0,0,0,0.3)] text-white hover:bg-slate-200 hover:text-black'
                }
              >
                <PlayIcon className='h-4 sm:h-8' /> &nbsp; TRAILER
              </button>

              <button className={styles.circularButtons}>
                <PlusSmIcon className={styles.circularIconsStyles} />
              </button>

              <button className={styles.circularButtons}>
                <UserGroupIcon className={styles.circularIconsStyles} />
              </button>
            </div>

            <div className='text-white tracking-wide mt-4 pl-12'>
              {subTitle}
            </div>

            <p className='text-white tracking-wide mt-3 max-w-md text-lg pl-12'>
              {description}
            </p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default details;
