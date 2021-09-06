import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button, { BtnTypes, BtnSize } from "./index";

const defaultProps = {
  onClick: jest.fn(),
};

const testProps = {
  btnType: "primary" as BtnTypes,
  size: "lg" as BtnSize,
  className: "klans",
};

describe("test button component", () => {
  it("should render the correct default button", () => {
    const wrapper = render(<Button {...defaultProps}>Button</Button>);
    const element = wrapper.getByText("Button");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("BUTTON");
    expect(element).toHaveClass("btn btn-default");

    fireEvent.click(element);
    expect(defaultProps.onClick).toBeCalled();
  });

  it("should render the correct based on different props", () => {
    const wrapper = render(<Button {...testProps}>Button</Button>);
    const element = wrapper.getByText("Button");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("btn btn-primary btn-lg klans");
  });

  it("should render a link when btnType equals link abd href is provided", () => {
    const wrapper = render(
      <Button btnType="link" href="http://www.baidu.com">
        Link
      </Button>
    );
    const element = wrapper.getByText("Link");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual("A");
    expect(element).toHaveClass("btn-link");
  });

  it("should render disabled button when disabled set to true", () => {
    const wrapper = render(
      <Button disabled={true} {...defaultProps}>
        Button
      </Button>
    );
    const element = wrapper.getByText("Button") as HTMLButtonElement;
    expect(element.disabled).toBeTruthy();

    fireEvent.click(element);
    expect(defaultProps.onClick).not.toBeCalled();
  });
});
