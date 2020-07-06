import React from "react";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

export class UnconnectApp extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

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

const mapStateToProps = (state) => {
  return ({ success, guessedWord, secretWor } = state);
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectApp);
