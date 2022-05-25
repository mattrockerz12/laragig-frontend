import axios from "axios";
import * as types from "./actiontypes";

export const loadListing = (filters) => async (dispatch) => {
  const arr = [];

  if (filters.page) {
    arr.push(`page=${filters.page}`);
  }

  const { data } = await axios.get(
    `http://localhost:8000/api/laragig/listings?${arr.join("&")}`
  );

  dispatch({
    type: types.LOAD_LISTINGS,
    payload: data.data,
    meta: data.meta,
  });
};

export const saveList = (list) => async (dispatch) => {
  const { data } = await axios.post(
    "http://localhost:8000/api/laragig/listings",
    list
  );

  dispatch({
    type: types.CREATE_LISTING,
    payload: data,
  });
};

export const editList = (list, id) => async (dispatch) => {
  const { data } = await axios.put(
    `http://localhost:8000/api/laragig/listings/${id}`,
    list
  );

  dispatch({
    type: types.EDIT_LISTING,
    payload: data,
  });
};

export const deleteList = (list) => async (dispatch) => {
  await axios.delete(`http://localhost:8000/api/laragig/listings/${list.id}`);

  dispatch({
    type: types.DELETE_LISTING,
    payload: list,
  });
};
