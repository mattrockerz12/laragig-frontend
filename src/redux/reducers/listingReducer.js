import * as types from "../actions/actiontypes";

const initialState = {
    listings: []
}

export default function listReducer(state = initialState.listings, action) {
    switch (action.type) {
        case types.LOAD_LISTINGS:
            return action.payload;
        case types.CREATE_LISTING:
            return [...state, {...action.payload}];
        case types.EDIT_LISTING:
            return state.map(list => list.id === action.payload.id ? action.payload : list);
        case types.DELETE_LISTING:
            return state.filter(list => list.id !== action.payload.id);
        default:
            return state;
    }
}