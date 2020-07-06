import Axios from "axios";
import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SCRET_WORD: "SET_SCRET_WORD",
};

export const getSecretWord = () => {
  return (dispatch) => {
    return Axios.get("http://localhost:3030").then((res) =>
      dispatch({
        type: actionTypes.SET_SCRET_WORD,
        payload: res.data,
      })
    );
  };
};

export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};
