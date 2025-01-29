import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="button" theme="primary" testId="primary-button" />);

    expect(screen.getByRole("button").innerHTML).toEqual("button");
  });

  test("renders the Button component with the class of primary", () => {
    render(<Button label="button" theme="primary" testId="primary-button" />);
    const primaryButton = screen.getByRole("button");
    expect(primaryButton.getAttribute("class")).toContain("button-primary");
  });
});
