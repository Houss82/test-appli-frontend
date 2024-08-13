"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar2() {
  const [isClick, setIsClick] = useState();

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <nav className="bg-allostoreBlanc fixed top-0 w-full z-50 shadow-lg">
        <div className="pl-2">
          <div className="flex items-center justify-between h-20 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="w-18 h-18"
                  src="/allostoreIcon.png"
                  alt="Allostore Icon"
                />
              </div>
            </div>
            <div className="hidden md:flex">
              <div className=" flex items-center justify-between ">
                <Link href="/" className=" rounded-lg p-2 ">
                  <p className=" nav-item font-semibold p-4  hover:cursor-pointer lg:text-2xl xxl:mr-5">
                    Accueil
                  </p>
                </Link>
                <Link
                  href="/servicesPage"
                  className=" text-allostoreBleu  rounded-lg p-2"
                >
                  <p className=" nav-item font-semibold  rounded-lg p-4 hover:cursor-pointer lg:text-2xl xxl:mr-5">
                    Services
                  </p>
                </Link>
                <Link
                  href="/experiencePage"
                  className="text-allostoreBleu  hover:bg-white hover:text-black rounded-lg p-2"
                >
                  <p className=" nav-item font-semibold  rounded-lg p-4 hover:cursor-pointer lg:text-2xl xxl:mr-5">
                    Expérience
                  </p>
                </Link>
                <Link
                  href="/contactPage"
                  className="text-allostoreBleu hover:bg-white hover:text-black rounded-lg p-2"
                >
                  <p className=" nav-item font-semibold  rounded-lg p-4 hover:cursor-pointer lg:text-2xl xxl:mr-1">
                    Contact
                  </p>
                </Link>

                <button className="hidden sm:block bg-allostoreRouge text-white ml-2 font-semibold h-auto w-2/6 px-6 py-3 mr-2 rounded-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-allostoreBleu duration-100 animate__animated animate__pulse animate__infinite">
                  Devis GRATUIT !
                </button>
              </div>
            </div>
            <div className="md:hidden mx-3 flex flex-col items-center justify-center">
              <button onClick={toggleNavbar}>
                <img
                  className="w-4 h-4"
                  src={isClick ? "/close1.png" : "/more2.png"}
                  alt={isClick ? "Cacher le menu" : "Montrer le menu"}
                />
              </button>
              <span
                className={`${
                  !isClick ? "block" : "hidden"
                } text-xxs text-allostoreBleu mt-1 font-bold`}
              >
                Menu
              </span>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-1 pt-1 pb-1 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-allostoreBleu hover:bg-white hover:text-black rounded-lg p-1"
              >
                <p className=" nav-item2 font-bold  rounded-lg p-2 hover:cursor-pointer ">
                  Accueil
                </p>
              </Link>
              <Link
                href="/servicesPage"
                className=" text-allostoreBleu  rounded-lg p-1"
              >
                <p className=" nav-item2 font-bold  rounded-lg p-2 hover:cursor-pointer ">
                  Services
                </p>
              </Link>
              <Link
                href="/experiencePage"
                className="text-allostoreBleu  hover:bg-white hover:text-black rounded-lg p-1"
              >
                <p className=" nav-item2 font-bold  rounded-lg p-2 hover:cursor-pointer ">
                  Expérience
                </p>
              </Link>
              <Link
                href="/contactPage"
                className="text-allostoreBleu hover:bg-white hover:text-black rounded-lg p-1"
              >
                <p className=" nav-item2 font-bold  rounded-lg p-2 hover:cursor-pointer ">
                  Contact
                </p>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
