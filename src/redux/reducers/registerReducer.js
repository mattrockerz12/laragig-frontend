import * as types from "../actions/actiontypes"

const initialState = {
    users: []
}

export default function registerReducer(state = initialState.users, action) {
    switch (action.type) {
        case types.REGISTER_USER:
            return [...state, {...action.payload}];
        default:
            return state;
    }
}