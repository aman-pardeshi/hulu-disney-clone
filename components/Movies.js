import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import sampleImage from '../assests/Simpson.jpg';

const styles = {
  containerStyles: `mb-20 `,
  titleStyles: `text-lg font-bold tracking-wider`,
  contentWrapperStyles: `grid grid-cols-5 gap-2 my-2`,
  contentDivStyles: `border-2 border-[rgba(249,249,249,0.1)] shadow-lg shadow-black cursor-pointer transition-all duration-300 scale-[0.9]
  hover:scale-[1] hover:border-[blue] hover:shadow-xl hover:shadow-black leading-none`,
};

const Movies = () => {
  const router = useRouter();

  return (
    <div className={styles.containerStyles}>
      <h3 className={styles.titleStyles}>Recommended</h3>
      <div className={styles.contentWrapperStyles}>
        <div
          className={styles.contentDivStyles}
          onClick={() => router.push('/details')}
        >
          <Image src={sampleImage} />
        </div>

        <div className={styles.contentDivStyles}>
          <Image src={sampleImage} />
        </div>

        <div className={styles.contentDivStyles}>
          <Image src={sampleImage} />
        </div>

        <div className={styles.contentDivStyles}>
          <Image src={sampleImage} />
        </div>

        <div className={styles.contentDivStyles}>
          <Image src={sampleImage} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
