import React from "react";
import hookActions from "./actions/hookActions";
import "./App.css";
import Input from "./component/Input";

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

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p>Loagind secret word</p>
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <Input secretWord={state.secretWord} />
    </div>
  );
}

export default App;
