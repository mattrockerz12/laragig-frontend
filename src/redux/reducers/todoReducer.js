import * as types from "../actions/actiontypes";

const initialState = {
    todos: []
}


export default function todoReducer(state = initialState.todos, action) {
    switch (action.type) {
        case types.LOAD_TODOS:
            return action.payload;
        default:
            return state;
    }
}