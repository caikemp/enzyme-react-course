import { combineReducers } from "redux";
import guessedWords from "./guessedWordsReducer";
import secretWord from "./secretWordReducer";
import success from "./successRedux";

export default combineReducers({
  success,
  secretWord,
  guessedWords,
});
