import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import Header from "../../Components/Header";
import Home from "../../Containers/Home";
import Footer from "../../Components/Footer";
import App from "../../App";

test("Test containers on path=/", () => {
  const wrapper = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Header)).toHaveLength(0);
  expect(wrapper.find(Home)).toHaveLength(1);
  expect(wrapper.find(Footer)).toHaveLength(1);
});
