import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders whitout crashing", () => {
  const wrapper = shallow(<App />);
  // trick
  // console.log(wrapper.debug());
});
