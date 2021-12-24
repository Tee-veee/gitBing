// IMPORT LIBRARIES

// IMPORT COMPONENTS
import UserList from "../components/users/UserList";
import UserSearch from "../components/users/UserSearch";
import Alert from "../components/layout/Alert";

function Home() {
  return (
    <div>
      <h2 className="mb-6 text-3xl">Welcome to GitBing!</h2>
      <Alert />
      <UserSearch />
      <UserList />
    </div>
  );
}

export default Home;
