import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Logo from "../assests/Logo";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  FilmIcon,
  TicketIcon,
} from "@heroicons/react/outline";
import { StarIcon, UserCircleIcon } from "@heroicons/react/solid";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  getUserDetails,
  signOutUser,
} from "../utils/firebase.utlis";
import ChevronDown from "../assests/chevronDown";

const styles = {
  headerStyles: `h-[75px] py-5 px-10 mb-0.5 bg-[#17171A]`,
  userIconStyles: `bg-[#1CE783] h-7 rounded-2xl cursor-pointer mr-4`,
  iconStyles: `flex flex-grow justify-evenly max-w-2xl mr-1 px-1`,
  loginButtonStyles: `text-[#A2A9B6] px-4 py-1 rounded-xl cursor-pointer font-bold text-[.9rem] hover:bg-[#272C34]`,
};

const Header = () => {
  const router = useRouter();
  const [onLoginPage, setOnLoginPage] = useState(false);
  const [currentUser, setCurrentUser] = useState(getUserDetails());
  const [dropdownStatus, setDropDownStatus] = useState(false);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    setCurrentUser(getUserDetails());
    router.push("/");
  };

  useEffect(() => {
    getURLData();
    setCurrentUser(getUserDetails());
  }, []);

  const getURLData = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setOnLoginPage(Boolean(urlParams.get("lpage")));
  };

  const logOutHandler = () => {
    signOutUser();
    setUser(null);
    setDropDownStatus((s) => !s);
  };

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
          {currentUser ? (
            <div className='flex px-2 py-1 rounded-full'>
              <UserCircleIcon className={styles.userIconStyles} />
              <div>
                <div
                  className='text-gray-200 font-bold text-xl mr-2 cursor-pointer flex items-center gap-2'
                  onClick={() => setDropDownStatus((s) => !s)}
                >
                  {currentUser.displayName}
                  <ChevronDown fill='white' />
                </div>

                <div
                  className={
                    dropdownStatus ? "visible" : "hidden" + " relative"
                  }
                >
                  <ul className='text-[#c4cacf] font-bold bg-[#272C34] absolute z-[1] w-40'>
                    <li className='p-2 cursor-pointer hover:text-white'>
                      Profile
                    </li>
                    <li
                      className='p-2 cursor-pointer hover:text-white'
                      onClick={logOutHandler}
                    >
                      Log out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <p
              className={styles.loginButtonStyles}
              onClick={
                onLoginPage
                  ? () => logGoogleUser()
                  : () => router.push("/welcome?lpage=true")
              }
            >
              LOG IN
            </p>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
