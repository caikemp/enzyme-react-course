import React from "react";
import hookActions from "./actions/hookActions";
import "./App.css";
import Input from "./component/Input";
import LanguagePicker from "./component/LanguagePicker";
import languageContext from "./context/languageContext";

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
    case "setLanguage":
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: "",
    language: "en",
  });

  const setSecretWord = (secretWord) =>
    dispatch({ type: "setSecretWord", payload: secretWord });

  const setLanguage = (language) =>
    dispatch({ type: "setLanguage", payload: language });

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
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage} />
        <Input secretWord={state.secretWord} />
      </languageContext.Provider>
    </div>
  );
}

export default App;
