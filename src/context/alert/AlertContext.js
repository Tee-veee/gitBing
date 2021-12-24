import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initalState = {
    alert: null,
    type: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initalState);

  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(
      () =>
        dispatch({
          type: "REMOVE_ALERT",
        }),
      3000
    );
  };

  return (
    <AlertContext.Provider
      value={{ type: state.active, alert: state.alert, setAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
