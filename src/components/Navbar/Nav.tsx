import useUserDataStore from "@/zustang/useUserData";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Profile from "../ProfileInfo/ProfileInfo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, userData } = useUserDataStore();
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 shadow-sm bg-neutral-900 shadow-neutral-500 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./logo.png" className="h-8" alt="AlgoChunk Logo" />
            <span className="self-center text-zinc-200 text-2xl font-semibold whitespace-nowrap dark:text-white">
              Algochunk
            </span>
          </NavLink>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isLoggedIn ? (
              <Profile Data={userData} />
            ) : (
              <NavLink
                to="/login"
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 shadow-lg shadow-blue-400 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </NavLink>
            )}

            <button
              onClick={handleToggle}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-zinc-200">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 md:p-0 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white text-sm dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/problem-list"
                  className="block py-2 px-3 md:p-0 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white text-sm dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  DSA Problems
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/frontendproblemlist"
                  className="block text-sm py-2 px-3 md:p-0 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Frontend Problems
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="playground/code-editor"
                  className="block text-sm py-2 px-3 md:p-0 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Playground
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/community-section"
                  className="block text-sm py-2 px-3 md:p-0 rounded hover:bg-blue-500 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Community
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
