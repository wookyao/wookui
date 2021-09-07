import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Alert, { AlertTypes } from "./index";

const testProps = {
  title: "info",
  type: "info" as AlertTypes,
  desc: "this is a info alert",
};

describe("test alert component", () => {
  it("should render the correct based on different props", () => {
    const wrapper = render(<Alert {...testProps} />);
    const element = wrapper.getByText("info");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("DIV");
  });
});
