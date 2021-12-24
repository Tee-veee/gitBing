// IMPORT LIBRARIES
import { useContext } from "react";
import { BiError } from "react-icons/bi";
// STATE
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);

  return alert !== null ? (
    <div className="w-full flex text-rose-600 bg-red text-5xl">
      <p>
        <BiError className="mr-2" />
      </p>
      <p className="flex items-center text-2xl">{alert}</p>
    </div>
  ) : null;
}

export default Alert;
