import { combineReducers } from "redux";
import guessedWords from "./guessedWordsReducer";
import success from "./successRedux";

export default combineReducers({
  success,
  guessedWords,
});
