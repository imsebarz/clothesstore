import React from "react";
import { shallow } from "enzyme";
import Header from "../../Components/Header";
import { expect, describe } from "@jest/globals";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Header/>", () => {
  const header = shallow(
    <Router>
      <Header></Header>
    </Router>
  );
  test("Header render", () => {
    expect(header.length).toEqual(1);
  });
});
