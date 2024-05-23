'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './navbar.scss';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const handleMobileNavigation = () => {
    setMenuIcon(!menuIcon);
  };
  return (
    <header
      className="
    handlee 
    w-full 
    fixed 
    top-0 
    left-0 
    ease-in 
    duration-300 
    z-10 
    border
    sm:text-xl 
     bg-slate-50
     select-none
     "
    >
      <nav className="h-[80px] flex justify-between items-center p-4">
        <div
          className="logo flex justify-between items-center py-3"
          onClick={menuIcon === true ? handleMobileNavigation : undefined}
        >
          <Link href="/" className="flex justify-around items-center">
            <Image src="/assets/img/logo.png" alt="logo" width={40} height={40} />
            <div>
              <h2 className=" pl-2 pt-2 lg:text-sm xl:text-xl 2xl:text-2xl 4xl:text-4xl hover:font-bold">
                Ô Délices de Bertrand
              </h2>
            </div>
          </Link>
        </div>
        <ul className="hidden lg:flex lg:text-base xl:text-xl 2xl:text-2xl 4xl:text-4xl uppercase font-bold text-slate-800">
          <li className="mr-4 lg:mr-8 hover:drop-shadow-lg hover:text-indigo-700">
            <Link href="/about">à propos</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:drop-shadow-lg hover:text-indigo-700">
            <Link href="/gallery">images</Link>
          </li>
          <li className="mr-4 lg:mr-8 hover:drop-shadow-lg hover:text-indigo-700">
            <Link href="/contact">contact</Link>
          </li>
          <li className="lg:mr-8 hover:drop-shadow-lg hover:text-indigo-700">
            <Link href="/forum">forum</Link>
          </li>
        </ul>
        <div className="hidden lg:flex">
          <Link href="/login">
            <button className="mr-4 lg:text-sm xl:text-xl 4xl:text-3xl border-2 border-indigo-500 bg-indigo-500 text-slate-50 hover:bg-slate-800 hover:text-indigo-400 rounded-full uppercase font-bold px-8 py-2">
              connexion
            </button>
          </Link>
          <Link href="/signup">
            <button className="lg:text-sm xl:text-xl 4xl:text-3xl border-2 border-indigo-500 text-indigo-700 hover:bg-indigo-500 hover:text-slate-50 rounded-full uppercase font-bold px-8 py-2">
              inscription
            </button>
          </Link>
        </div>
        <div className="flex lg:hidden" onClick={handleMobileNavigation}>
          {menuIcon ? (
            <AiOutlineClose size={25} className="text-indigo-500" />
          ) : (
            <AiOutlineMenu size={25} className="text-indigo-500" />
          )}
        </div>
        <div
          className={
            menuIcon
              ? 'mobile-nav lg:hidden absolute top-[80px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-[100dvh] text-white text-center ease-in duration-300'
              : 'mobile-nav lg:hidden absolute top-[80px] right-0 left-[-100%] flex justify-center items-center w-full h-[100dvh] text-white text-center ease-in duration-300'
          }
        >
          {/* {screen.orientation.type === 'landscape-primary' ? (
            <div>toto</div>
          ) : ( */}
          <div className="w-full h-[100dvh] flex items-center justify-center">
            <ul className="uppercase font-bold md:text-4xl xs:text-sm w-1/2 mt-[-80px]">
              <li
                className="xs:py-2 py-3 hover:text-indigo-500"
                onClick={handleMobileNavigation}
              >
                <Link href="/about">À propos</Link>
              </li>
              <li
                className="xs:py-2 py-3 hover:text-indigo-500"
                onClick={handleMobileNavigation}
              >
                <Link href="/gallery">images</Link>
              </li>
              <li
                className="xs:py-2 py-3 hover:text-indigo-500"
                onClick={handleMobileNavigation}
              >
                <Link href="/contact">contact</Link>
              </li>
              <li
                className="xs:py-2 py-3 hover:text-indigo-500"
                onClick={handleMobileNavigation}
              >
                <Link href="/forum">forum</Link>
              </li>
              <li className="mt-5">
                <Link href="/login" onClick={handleMobileNavigation}>
                  <button className="text-white bg-indigo-500 uppercase font-bold rounded-full py-3 w-[50vw] mb-3">
                    connexion
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/signup" onClick={handleMobileNavigation}>
                  <button className="border-2 border-indigo-500 text-white uppercase font-bold rounded-full py-3 w-[50vw] mb-1">
                    inscription
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          {/* )} */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;