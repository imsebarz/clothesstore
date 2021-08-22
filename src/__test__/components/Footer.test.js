import React from "react";
import { mount } from "enzyme";
import Footer from "../../Components/Footer";
import { expect, describe } from "@jest/globals";

describe("<Footer/>", () => {
  const footer = mount(<Footer></Footer>);
  test("Footer render", () => {
    expect(footer.length).toEqual(1);
  });
  test("Render del copy", () => {
    expect(footer.find(".footer-copy").text()).toEqual(
      "© Copyrigth Colombia. Todos los derechos reservados"
    );
  });
});
