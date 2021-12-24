// IMPORT LIBRARIES
import { useState, useContext } from "react";
import { FaSearch, FaTrash } from "react-icons/fa";

// IMPORT STATE
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
function UserSearch() {
  const [formText, setFormText] = useState("");

  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setFormText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formText) {
      setAlert("Please enter something", "error");
      console.log("alert");
    } else {
      searchUsers(formText);
      setFormText("");
    }
  };

  return (
    <div className="relative flex h-full mb-6 p-4 bg-mainColorDk">
      <form className="flex w-10/12 lg:w-5/12">
        <input
          type="text"
          className="px-4 py-2 w-full outline-none rounded-l-xl"
          value={formText}
          onChange={handleChange}
          placeholder=""
        />
        <button className="w-7 bg-white rounded-r-xl" onClick={handleSubmit}>
          <FaSearch className="h-full" />
        </button>
        {users.length > 0 ? (
          <button className="">
            <FaTrash
              className="absolute text-white top-2 right-2"
              onClick={clearUsers}
            />
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default UserSearch;
