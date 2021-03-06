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

test("clickin on button increments counter display", () => {
  const wrapper = setup();
  //find the button
  const button = findByTestAttr(wrapper, "increment-button");
  //click the button
  button.simulate("click");

  // find the display and test that the number has been incremented
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

test("criar decrement button com text decrement button", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  expect(button.length).toBe(1);
});

test("when clicked, decrement the counter", () => {
  const wrapper = setup();
  const buttonadd = findByTestAttr(wrapper, "increment-button");
  buttonadd.simulate("click");

  const buttondecre = findByTestAttr(wrapper, "decrement-button");
  buttondecre.simulate("click");

  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("Dont let the counter go below zero", () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "decrement-button");
  button.simulate("click");
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("0");
});

test("display an error message saying the counter can't go below zero", () => {
  const wrapper = setup();
  const alert = findByTestAttr(wrapper, "alert");

  const errorHiddenClass = alert.hasClass("hidden");
  expect(errorHiddenClass).toBe(true);
});

describe("counter is 0 and decrement is clicked", () => {
  //wrapper desconstruido para ser usado com o beforeEach em todos os testes
  let wrapper;
  beforeEach(() => {
    wrapper = setup();

    // find button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
  });

  test("show error", () => {
    const alert = findByTestAttr(wrapper, "alert");
    const errorHiddenClass = alert.hasClass("hidden");
    expect(errorHiddenClass).toBe(false);
  });

  test("clicking increment clears the error", () => {
    // find and click the increment button
    const ButtonInc = findByTestAttr(wrapper, "increment-button");
    ButtonInc.simulate("click");

    // check the class of the error message
    const errorDiv = findByTestAttr(wrapper, "alert");
    const errorHasHiddenClass = errorDiv.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });

  //end of describe
});
