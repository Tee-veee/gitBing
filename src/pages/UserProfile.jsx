// IMPORT LIBRARIES
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { TiTickOutline } from "react-icons/ti";

// IMPORT COMPONENTS
import Spinner from "../components/layout/Spinner";
import RepoList from "../components/layout/repos/RepoList";

// STATE
import GithubContext from "../context/github/GithubContext";

function UserProfile() {
  const { getUser, user, loading, getUserRepos, repos } =
    useContext(GithubContext);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    login,
    public_repos,
    public_gists,
    hireable,
    email,
  } = user;

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col h-fit md:flex-row">
          <div className="flex flex-col items-center m-auto justify-center  w-fit  md:items-start lg:justify-center ">
            <p className="flex mb-4 rounded-2xl bg-white opacity-80 text-black p-2 shadow-lg">
              {login}
            </p>
            <img
              src={avatar_url}
              height={320}
              width={320}
              alt="Github profile"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0 h-auto">
            <div className="flex pt-0 md:pr-4 md:pb-4 md:pl-4  flex-col md:flex-row items-center justify-between w-full text-xl flex-1 md:text-2xl">
              <p className="rounded-2xl bg-white opacity-80 text-black p-2 text-4xl md:text-xl lg:text-2xl mb-4 shadow-lg">
                {name === null ? login : name}
              </p>
              <div className="flex items-center text-black text-lg md:text-2xl">
                <p className="mr-4 pr-2 pl-2 p-1 rounded bg-white opacity-70 shadow-lg">
                  {type}
                </p>
                {hireable ? (
                  <p className="flex items-center pr-2 pl-2 p-1 rounded bg-white opacity-60 shadow-lg">
                    Hireable
                    <TiTickOutline className="text-emerald-500 text-2xl" />
                  </p>
                ) : null}
              </div>
            </div>
            <div className="flex flex-col align-start justify-between mt-4 md:mt-0 md:pl-4 h-5/6 text-lg">
              <p>{bio}</p>
              <div className="flex">
                <button className="mb-6 mt-6 md:mt-0 hover:scale-95 hover:transition-all">
                  <a
                    href={`https://github.com/${login}`}
                    target="_blank"
                    className="bg-mainColorDk p-4 rounded-md shadow-lg md:text-3xl text-black"
                    rel="noreferrer"
                  >
                    View <strong>{login}</strong> github
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col md:flex-row w-full bg-white text-xl md:text-2xl shadow-xl">
          {location !== null ? (
            <div className="flex-1 flex flex-col p-4">
              <p className="text-base text-mainColorDk font-bold">Location</p>
              <h4>{location}</h4>
            </div>
          ) : null}
          {email !== null ? (
            <div className="flex-1 flex flex-col p-4">
              <p className="text-base text-mainColorDk font-bold">Email</p>
              <h4>{email}</h4>
            </div>
          ) : null}

          <div className="flex-1 flex flex-col p-4">
            <p className="text-base text-mainColorDk font-bold">Public Repos</p>
            <h4>{public_repos}</h4>
          </div>
          <div className="flex-1 flex flex-col p-4">
            <p className="text-base text-mainColorDk font-bold">Public Gists</p>
            <h4>{public_gists}</h4>
          </div>
        </div>
      </div>

      <div className="grid gap-y-4 mt-4 ">
        <h2 className="w-full flex items-center p-4 text-2xl font-bold">
          USER REPOSITORIES: {repos.length}
        </h2>
        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default UserProfile;
