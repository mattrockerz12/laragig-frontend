import axios from "axios";
import * as types from "./actiontypes";

export const setUser = (user) => {
  return { type: types.SET_USER, user };
};

export const getUser = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:8000/api/laragig/user");

  dispatch({
    type: types.GET_USER,
    user: data.data,
  });
};
