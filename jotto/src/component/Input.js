import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  render() {
    const content = this.props.success ? null : (
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
        >
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(mapStateToProps)(Input);
