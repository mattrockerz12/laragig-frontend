import axios from "axios";
import * as types from "./actiontypes";

export const loadTodos =  () => async (dispatch) => {
    const { data } = await axios.get("http://localhost:8000/api/admin/todos");

    dispatch({
        type: types.LOAD_TODOS,
        payload: data
    });
}