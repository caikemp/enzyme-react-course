import { shallow } from "enzyme";
import React from "react";
import { checkProps, findByTestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper
 *
 * @param {*} props
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);
  if (state) wrapper.setState(state);

  return wrapper;
};

/**
 *
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 *
 */

test("renders without error", () => {
  const appComponent = findByTestAttr(setup({}), "component-congrats");
  expect(appComponent.length).toBe(1);
});

test("renders no text when `success` prop is false ", () => {
  const appComponent = findByTestAttr(setup(), "component-congrats");
  expect(appComponent.text()).toBe("");
});

test("renders non-empty congrats message when `success` props is try", () => {
  const appComponent = findByTestAttr(
    setup({ success: true }),
    "component-congrats"
  );
  expect(appComponent.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
