import React from "react";
import { connect } from "react-redux";
import { guessWord } from "../actions";

export class UnconnectInput extends React.Component {
  render() {
    const content =
      this.props.success || this.props.gaveUp ? null : (
        <form className="form-inline">
          <input
            data-test="input-box"
            className="mb-2 mx-sm-3"
            type="text"
            placeholder="enter guess"
          />
          <button
            data-test="submit-button"
            type="submit"
            className="btn btn-primary mb-2"
            onClick={() => this.props.guessWord("train")}
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
