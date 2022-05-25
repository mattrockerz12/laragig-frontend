import * as types from "../actions/actiontypes";

const initialState = {
  listings: [],
  meta: {},
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_LISTINGS:
      return {
        ...state,
        listings: action.payload,
        meta: action.meta,
      };
    case types.CREATE_LISTING:
      return {
        ...state,
        listings: [...state.listings, { ...action.payload }],
      };
    case types.EDIT_LISTING:
      return {
        ...state,
        listings: [
          ...state.listings,
          ...state.listings.map((list) =>
            list.id === action.payload.id ? action.payload : list
          ),
        ],
      };
    case types.DELETE_LISTING:
      return {
        ...state,
        listings: [
          ...state.listings,
          ...state.listings.filter((list) => list.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
}
