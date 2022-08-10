import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import sampleImage from '../assests/sampleImageDetails.jpg';
import sampleImageTitle from '../assests/sampleImageTitle.png';
import { PlayIcon, UserGroupIcon } from '@heroicons/react/solid';
import { PlusSmIcon } from '@heroicons/react/outline';

const styles = {
  backgroundContainer: `min-h-[calc(100vh-70px)] text-gray-500 -z-[1] fixed top-0 bottom-0 right-0 left-0 opacity-80`,
  imgStyles: `w-full h-full`,
  imageTitleContainer: `w-[30vw] min-w-[200px] mb-[20px]`,
  controlStyles: `flex gap-3 sm:text-xl text-sm`,
  playButtons: `sm:px-4 sm:py-2 px-2 py-1 flex justify-center items-center rounded-sm tracking-widest border-2 border-white`,
  circularButtons: `text-white bg-[rgba(0,0,0,0.5)] rounded-full px-2 hover:scale-110 border-2 border-transparent hover:border-white`,
  circularIconsStyles: `h-4 sm:h-7 text-sm px-1`,
};

const details = () => {
  return (
    <div className='relative'>
      <Header />
      <div className='px-20 mt-4'>
        <div className={styles.backgroundContainer}>
          <Image
            src={sampleImage}
            layout='responsive'
            className={styles.imgStyles}
          />
        </div>

        {/* Div for title of movie which is in image */}
        <div className={styles.imageTitleContainer}>
          <Image src={sampleImageTitle} className={styles.imgStyles} />
        </div>

        <div className={styles.controlStyles}>
          <button
            className={
              styles.playButtons + ' bg-slate-100 hover:bg-[rgb(149,149,149)]'
            }
          >
            <PlayIcon className='h-4 sm:h-8' /> &nbsp; PLAY
          </button>

          <button
            className={
              styles.playButtons +
              ' bg-[rgba(0,0,0,0.3)]  text-white  hover:bg-slate-200 hover:text-black'
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
      </div>
    </div>
  );
};

export default details;
