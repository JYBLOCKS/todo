import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../../App";

describe("App Testing", () => {
  test("App Testing", () => {
    render(<App />);
    const homeEle = screen.getByTestId("home").textContent;
    expect(homeEle).toBe("Home");
  });
});
