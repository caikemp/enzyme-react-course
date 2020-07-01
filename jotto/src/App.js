import React from "react";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

class App extends React.Component {
  render = () => (
    <div className="container-fluid">
      <header className="row">
        <div className="col">
          <h1>Jotto</h1>
          <Congrats success={false} />
          <GuessedWords
            guessedWords={[
              { guessedWord: "train", letterMatchCount: 3 },
              { guessedWord: "agile", letterMatchCount: 1 },
              { guessedWord: "party", letterMatchCount: 5 },
            ]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
