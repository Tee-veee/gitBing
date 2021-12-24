// LIBRARY IMPORTS
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex justify-between bg-accentColor px-2 md:px-8  mb-4 text-xl shadow-lg w-full">
      {/* LEFT NAV DIV */}
      <div className="flex items-center p-2 ">
        <FaGithub className="text-6xl inline mr-4" />
        <Link to="/" className="text:2xl md:text-3xl">
          GitBing
        </Link>
      </div>
      {/* RIGHT NAV DIV */}
      <div className="flex items-center justify-center text-lg md:text-xl">
        <Link
          to="/"
          className="mr-2 md:mr-4 px-4 py-2 hover:bg-mainColor hover:bg-mainColorDk hover:rounded-md hover:shadow-lg hover:text-white hover:transition-all"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="ml-2 md:ml-4 px-4 py-2 hover:bg-mainColorDk hover:rounded-md hover:shadow-lg hover:text-white hover:transition-all"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
