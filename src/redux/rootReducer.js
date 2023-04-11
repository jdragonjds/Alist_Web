import { combineReducers } from "redux";
import animeReducer from "./animeReducer";
import friendReducer from "./friendReducer";

const rootReducer = combineReducers({
  anime: animeReducer,
  friend: friendReducer,
});

export default rootReducer;
