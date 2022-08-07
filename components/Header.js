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
  headerStyles: `my-5 mx-10`,
  loginButtonStyles: `text-[#A2A9B6] px-4 py-2 rounded-xl cursor-pointer font-bold text-[.9rem] hover:bg-[#272C34] mr-4`,
};

const Header = () => {
  return (
    <header className={styles.headerStyles}>
      <nav className='flex justify-between'>
        <Logo />
        <div className='flex items-start'>
          <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderIcon title='HOME' Icon={HomeIcon} />
            <HeaderIcon title='SEARCH' Icon={SearchIcon} />
            <HeaderIcon title='WATCHLIST' Icon={PlusIcon} />
            <HeaderIcon title='ORIGINALS' Icon={StarIcon} />
            <HeaderIcon title='MOVIES' Icon={FilmIcon} />
            <HeaderIcon title='SERIES' Icon={TicketIcon} />
          </div>
          <p className={styles.loginButtonStyles}>LOG IN</p>

          {/* User Image */}
          <div>
            <UserCircleIcon className='bg-[#1CE783] h-7 rounded-2xl cursor-pointer' />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
