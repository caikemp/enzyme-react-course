import { actionTypes } from "../actions";
export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.SET_SCRET_WORD:
      return action.payload;

    default:
      return state;
  }
};
