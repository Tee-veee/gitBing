// LIBRARY IMPORTS
import { Link } from "react-router-dom";
import { MdVideogameAsset } from "react-icons/md";

function Footer() {
  const footYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center px-8 py-4  text-xl shadow-lg w-full">
      <div className="flex flex-col items-center m-2">
        <Link to="/easteregg">
          <MdVideogameAsset className="text-7xl hover:-translate-y-3 hover:text-mainColorDk hover:transition-all" />
        </Link>
        <p>Copyright &copy; {footYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
