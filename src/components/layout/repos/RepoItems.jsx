// IMPORT LIBRARIES
import { useEffect, useState } from "react";

// IMPORT COMPONENTS
import RepoIcon from "./RepoIcon";

function RepoItems({ repoItem }) {
  const [codeLanguage, setCodeLanguage] = useState({});
  const [isActive, setIsActive] = useState(false);

  // DESTRUCTURE REPO ITEM
  const { name, languages_url, created_at, updated_at, full_name } = repoItem;
  // SLICE TIME VARIABLES FOR CORRECT FORMAT
  const createdOn = created_at.slice(0, 10);
  const updatedOn = updated_at.slice(0, 10);

  useEffect(() => {
    getUserRepoLanguages(languages_url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // GETS USER REPO LANGUAGES FROM URL PASSED IN
  const getUserRepoLanguages = async (url) => {
    const response = await fetch(`${url}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setCodeLanguage(data);
  };

  return (
    <div
      className={`p-4 bg-white h-30 transition duration-1000 cursor-pointer ${
        isActive ? "bg-[#ececec] shadow-lg" : "bg-white"
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex justify-between w-full text-xl md:text-2xl">
        <p>{name}</p>
        <RepoIcon languageState={codeLanguage} isActive={isActive} />
      </div>
      {isActive ? (
        <div className="w-full transition-all text-xl duration-1000 mt-4">
          <div className="flex flex-col md:flex-row w-full justify-between mb-6">
            <p>
              <span className="text-mainColorDk font-bold ">Created: </span>
              {createdOn}
            </p>
            <p>
              <span className="text-mainColorDk font-bold">Updated: </span>
              {updatedOn}
            </p>
          </div>
          <div className="">
            <button className="hover:scale-95 mt-4 mb-4 hover:transition-all">
              <a
                href={`https://github.com/${full_name}`}
                target="_blank"
                className="bg-mainColorDk rounded-md shadow-lg p-4  text-black"
                rel="noreferrer"
              >
                View Repository
              </a>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default RepoItems;
