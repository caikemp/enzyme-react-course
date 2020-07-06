import { shallow } from "enzyme";
import React from "react";
import { storeFactory } from "../test/testUtils";
import { UnconnectApp } from "./App";
const { default: Input } = require("./component/Input");

const setup = (initialState) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

test("`getSecretWord` runs on App mount", () => {
  const getSecretWordMock = jest.fn();

  const props = {
    getSecretWord: getSecretWordMock,
    success: false,
    guessedWords: [],
  };

  const wrapper = shallow(<UnconnectApp {...props} />);

  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

  expect(getSecretWordCallCount).toBe(1);
});
