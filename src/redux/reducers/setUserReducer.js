import * as types from "../actions/actiontypes";

const initialState = {
  user: {},
};

const setUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        user: action.user,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default setUserReducer;
