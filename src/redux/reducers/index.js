import { combineReducers } from "redux";
import listings from "./listingReducer";
import user from "./setUserReducer";

const rootReducer = combineReducers({
  listings,
  user,
});

export default rootReducer;
