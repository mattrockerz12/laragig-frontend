import axios from "axios";
import * as types from "./actiontypes";

export const saveUser = (user) => async (dispatch) => {
    const { data } = await axios.post('http://localhost:8000/api/register', user);

    dispatch({
        type: types.REGISTER_USER, 
        payload: data
    });
}