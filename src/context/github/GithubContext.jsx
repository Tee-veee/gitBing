// IMPORT LIBRARIES
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

// CREATE GLOBAL CONTEXT FOR GITHUB STATE
const GithubContext = createContext();

// REST API VARIABLES
const GITHUB_FETCHURL = process.env.REACT_APP_GITHUB_FETCHURL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // TODO REDUCER STATE OBJECT
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // STATE AND DISPATCH
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  // FETCH API WHICH USES TOKEN FOR AUTH TESTING ONLY
  const searchUsers = async (formText) => {
    setLoading();

    const params = new URLSearchParams({
      q: formText,
    });
    // PAGINATION
    // page=1&per_page=40 query param for search
    const response = await fetch(`${GITHUB_FETCHURL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    // DISPATCH WITH ACTION OBJECT TYPE AND PAYLOAD, DEFINED IN REDUCER FUNCTION
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // FETCH API WHICH USES TOKEN FOR AUTH TESTING ONLY
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_FETCHURL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    // DISPATCH WITH ACTION OBJECT TYPE AND PAYLOAD, DEFINED IN REDUCER FUNCTION
    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
    });
    // PAGINATION
    // page=1&per_page=40 query param for search
    const response = await fetch(
      `${GITHUB_FETCHURL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await response.json();
    // DISPATCH WITH ACTION OBJECT TYPE AND PAYLOAD, DEFINED IN REDUCER FUNCTION
    dispatch({
      type: "GET_USER_REPOS",
      payload: data,
    });
  };

  // GIVES GLOBAL ACCESS TO VALUE VARIABLES, CHILDREN REPRESENT ALL CHILDREN NODES FROM APP.JS
  return (
    <GithubContext.Provider
      value={{
        ...state,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        setLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
