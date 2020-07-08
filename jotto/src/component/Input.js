import React from "react";
import { connect } from "react-redux";
import { guessWord } from "../actions";

export class UnconnectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGuess: "",
    };
  }
  submitGuessedWord = (e) => {
    e.preventDefault();
    let { currentGuess } = this.state;

    if (currentGuess && currentGuess.length > 0) {
      this.props.guessWord(currentGuess);
      this.setState({ currentGuess: "" });
    }
  };

  render() {
    const content =
      this.props.success || this.props.gaveUp ? null : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
            value={this.state.currentGuess}
            onChange={(e) => this.setState({ currentGuess: e.target.value })}
          />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary mb-2"
            onClick={this.submitGuessedWord}
          >
            Submit
          </button>
        </form>
      );

    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps, { guessWord })(UnconnectInput);
