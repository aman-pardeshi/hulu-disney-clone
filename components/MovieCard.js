import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

const styles = {
  titleStyles: `text-xl font-bold tracking-wider px-5 pb-0`,
  contentWrapperStyles: `grid grid-cols-5 gap-2 mb-2`,
  contentDivStyles: `border-2 border-[rgba(249,249,249,0.1)] shadow-lg shadow-black cursor-pointer transition-all duration-300 scale-[0.9] relative
  hover:scale-[1] hover:border-white hover:shadow-xl hover:shadow-black leading-none`,
};

const MovieCard = ({ movieArray, type }) => {
  const router = useRouter();

  return (
    <>
      <h3 className={styles.titleStyles}>{type}</h3>
      <div className={styles.contentWrapperStyles}>
        {movieArray &&
          movieArray.map((movie) => (
            <div
              key={movie.id}
              className={styles.contentDivStyles}
              onClick={() => router.push(`/details?id=${movie.id}`)}
            >
              <Image
                src={movie.cardImg}
                layout='responsive'
                width={60}
                height={35}
                className='object-cover'
                alt='movie-thumnail'
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default MovieCard;
