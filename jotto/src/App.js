import React from "react";
import { connect } from "react-redux";
import { getSecretWord } from "./actions";
import "./App.css";
import Input from "./component/Input";
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
          <div>The secret word is: {this.props.secretWord}</div>
          <Congrats success={this.props.success} />
          <Input />
          <GuessedWords guessedWords={this.props.guessedWords} />
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectApp);
