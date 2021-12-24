import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-bold mb-6 md:text-5xl">TROLLS LIVE HERE!</h1>
      <h3 className="font-normal mb-6 md:text-4xl">404 - Page not found!</h3>
      <Link to="/">
        <button className="flex items-center p-3 text-2xl md:text-3xl bg-mainColorDk rounded-md shadow-lg text-black transition-all hover:scale-95 hover:transition-all">
          <IoMdHome className="mr-2" />
          Back to home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
