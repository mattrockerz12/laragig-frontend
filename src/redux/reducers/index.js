import { combineReducers } from 'redux'
import todos from "./todoReducer";
import listings from "./listingReducer";

const rootReducer = combineReducers({
    todos,
    listings
});

export default rootReducer