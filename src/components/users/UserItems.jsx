// IMPORT LIBRARIES
import { Link } from "react-router-dom";

function UserItems({ user }) {
  const { login, avatar_url } = user;
  return (
    <div className="bg-white flex-1 p-4 hover:bg-mainColorDk hover:scale-[.97] hover:text-white hover:shadow-xl hover:transition-all">
      <div className="flex items-center">
        <img
          src={avatar_url}
          height={100}
          width={100}
          className="rounded-full mr-4 mb-4"
          alt="github-profile"
        />
        <p className="cursor-default">{login}</p>
      </div>
      <Link className="cursor-pointer break-all text-xl" to={`/user/${login}`}>
        View Profile
      </Link>
    </div>
  );
}

export default UserItems;
