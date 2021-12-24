// TAKES INITIAL STATE AND ACTION OBJECT AS VALUE
// RUNS SWITCH STATEMENT ON ACTION.TYPE AND RETURNS ACTION.PAYLOAD BASED ON TYPE
const AlertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return {
        ...state,
        alert: action.payload.msg,
        type: action.payload.type,
      };
    case "REMOVE_ALERT":
      return {
        alert: null,
        type: null,
      };
    default:
      return state;
  }
};

export default AlertReducer;
