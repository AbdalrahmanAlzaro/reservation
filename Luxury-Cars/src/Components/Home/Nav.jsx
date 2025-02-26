import { Link } from "react-router-dom";
import logo1 from "../../Images/Heading.png";
import Person2Icon from "@mui/icons-material/Person2";

function Nav() {
  return (
    <nav className=" fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img src={logo1} className="h-8 w-40 mr-3" alt="Flowbite Logo" />
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white hover:text-cyan-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:focus:ring-blue-800 max-md:hidden"
          ></button>
          <Link to="login">
            <button
              type="button"
              className="text-white hover:text-cyan-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:focus:ring-blue-800 max-md:hidden"
            >
              <Person2Icon fontSize="large" VerticalAlignCenter />
            </button>
          </Link>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg max-md:backdrop-blur-sm
             md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-cyan-300  md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 hover:text-cyan-300 md:p-0 text-white hover:border-cyan-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 hover:text-cyan-300 md:p-0 text-white hover:border-cyan-300"
              >
                Services
              </a>
            </li>
            <li>
              <Link
                to="contact"
                className="block py-2 pl-3 pr-4 hover:text-cyan-300 md:p-0 text-white hover:border-cyan-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <li className="md:hidden">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Log-In
                </button>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
