import Image from 'next/image';
import React from 'react';
import Logo from '../assests/Logo';
import HeaderIcon from './HeaderIcon';
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  FilmIcon,
  TicketIcon,
} from '@heroicons/react/outline';
import { StarIcon, UserCircleIcon } from '@heroicons/react/solid';

const styles = {
  headerStyles: `h-[75px] py-5 px-10 mb-0.5 bg-[#17171A]`,
  userIconStyles: `bg-[#1CE783] h-7 rounded-2xl cursor-pointer mr-4`,
  iconStyles: `flex flex-grow justify-evenly max-w-2xl mr-4`,
  loginButtonStyles: `text-[#A2A9B6] px-4 py-1 rounded-xl cursor-pointer font-bold text-[.9rem] hover:bg-[#272C34]`,
};

const Header = () => {
  return (
    <header className={styles.headerStyles}>
      <nav className='flex justify-between items-start'>
        <Logo />
        <div className='flex items-start'>
          <div className={styles.iconStyles}>
            <HeaderIcon title='HOME' Icon={HomeIcon} />
            <HeaderIcon title='SEARCH' Icon={SearchIcon} />
            <HeaderIcon title='WATCHLIST' Icon={PlusIcon} />
            <HeaderIcon title='ORIGINALS' Icon={StarIcon} />
            <HeaderIcon title='MOVIES' Icon={FilmIcon} />
            <HeaderIcon title='SERIES' Icon={TicketIcon} />
          </div>

          {/* User Image */}
          <div>
            <UserCircleIcon className={styles.userIconStyles} />
          </div>
          <p className={styles.loginButtonStyles}>LOG IN</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
