// IMPORT COMPONENTS
import RepoItems from "../repos/RepoItems";

// GET REPOS AND MAP THROUGH THEM TO RENDER LIST ITEMS FROM ITEM COMPONENT
function RepoList({ repos }) {
  return (
    <>
      {repos.map((repoItem) => {
        return <RepoItems key={repoItem.id} repoItem={repoItem} />;
      })}
    </>
  );
}

export default RepoList;
