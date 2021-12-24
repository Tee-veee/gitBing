// IMPORT LIBRARIES
import { useContext } from "react";

// IMPORT STATE
import GithubContext from "../../context/github/GithubContext";

// IMPORT COMPONENTS
import Spinner from "../layout/Spinner";
import UserItems from "./UserItems";

function UserList() {
  // DESTRUCTURE VALUES FROM GITHUB CONTEXT
  const { users, isLoading } = useContext(GithubContext);

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {users.map((user) => {
          return <UserItems key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    // add spinner
    return <Spinner />;
  }
}
export default UserList;
