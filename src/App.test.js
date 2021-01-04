import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";

// set up enzyme react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// factory function to create a shallowwrapper for the app component.
const setup = () => shallow(<App />);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () => {
  const wrapper = setup();

  const appComponent = findByTestAttr(wrapper, "component-app");

  expect(appComponent.length).toBe(1);
});
// first ctrl+c then apply DRY
test("renders button", () => {
  const wrapper = setup();

  const button = findByTestAttr(wrapper, "increment-button");

  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();

  const counterDisplay = findByTestAttr(wrapper, "counter-display");

  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("clickin on button increments counter display", () => {});
