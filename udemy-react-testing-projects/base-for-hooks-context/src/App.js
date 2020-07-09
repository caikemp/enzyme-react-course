import React from "react";
import hookActions from "./actions/hookActions";
import "./App.css";

/**
 *
 * @param {object} state
 * @param {object} action contain 'type' and 'payload' properties for the state update
 * @return {object} - new state
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "setSecretWord":
      return {
        ...state,
        secretWord: action.payload,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: "" });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);
  return <div data-test="component-app" />;
}

export default App;
