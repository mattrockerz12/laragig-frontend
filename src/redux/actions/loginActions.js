import axios from "axios"
import * as types from "./actiontypes"

export const loginUser = (user) => async (dispatch) => {
    const { data } = await axios.post('http://localhost:8000/api/login', user);

    dispatch({
        type: types.LOGIN_USER,
        payload: data
    });
}