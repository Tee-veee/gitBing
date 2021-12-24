// TAKES INITIAL STATE AND ACTION OBJECT AS VALUE
// RUNS SWITCH STATEMENT ON ACTION.TYPE AND RETURNS ACTION.PAYLOAD BASED ON TYPE
const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case "GET_USER_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "GET_REPO_LANGUAGES":
      return {
        ...state,
        repoLanguages: action.payload,
        loading: false,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        loading: false,
      };
    case "SET_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return "";
  }
};

export default githubReducer;
