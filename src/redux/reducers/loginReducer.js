import * as types from "../actions/actiontypes"

const initialState = {
    users: []
}

export default function loginReducer(state = initialState.users, action) {
    switch (action) {
        case types.LOGIN_USER:
            return [...state, { ...action.payload }];
        default:
            return state;
    }
}