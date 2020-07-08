import PropTypes from "prop-types";
import React from "react";

const Input = ({ secretWord }) => {
  return <div data-test="component-input"></div>;
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;