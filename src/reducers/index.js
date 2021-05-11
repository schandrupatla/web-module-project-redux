import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import movieReducer from "./movieReducer";

export const rootReducer = combineReducers({
  movies: movieReducer,
  favorites: favoriteReducer,
});

//  export default movieReducer;
export default rootReducer;