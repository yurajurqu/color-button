import { render, screen, fireEvent } from "@testing-library/react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", async () => {
  render(<App></App>);
  const colorButton = await screen.findByRole("button", {
    name: /change to midnightblue/i,
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "mediumvioletred" });
});
test("button turns blue when clicked", async () => {
  render(<App></App>);
  const colorButton = await screen.findByRole("button", {
    name: /change to midnightblue/i,
  });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "midnightblue" });
  expect(colorButton).toHaveTextContent(/change to mediumvioletred/i);
});
test("initial conditions", async () => {
  render(<App></App>);
  const colorButton = await screen.findByRole("button", {
    name: /change to midnightblue/i,
  });
  expect(colorButton).toBeEnabled();
  const checkbox = await screen.findByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
test("enable and disable", async () => {
  render(<App></App>);
  const colorButton = await screen.findByRole("button", {
    name: /change to midnightblue/i,
  });
  const checkbox = await screen.findByRole("checkbox", {
    name: "Disable button",
  });
  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  expect(colorButton).toHaveStyle({ backgroundColor: "mediumvioletred" });
});
describe("spaces before camel-case capital letters", () => {
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
