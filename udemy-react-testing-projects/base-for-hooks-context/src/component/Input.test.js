import { mount } from "enzyme";
import React from "react";
import { checkProps, findByTestAttr } from "../../test/testUtils";
import languageContext from "../context/languageContext";
import Input from "./Input";

const setup = ({ secretWord, language }) => {
  language = language || "en";
  secretWord = secretWord || "party";
  return mount(
    <languageContext.Provider value={language}>
      <Input secretWord={secretWord} />
    </languageContext.Provider>
  );
};

test("Input renders without error", () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup({});
  });

  test("state updates with value of input box upon change", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared up submit button click", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault: () => {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
