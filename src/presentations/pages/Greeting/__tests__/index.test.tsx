import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Greeting } from "..";

describe("Greeting", () => {
  it("should render greeting messages", () => {
    const v = render(<Greeting />);
    expect(v.queryByText("Hello Vite + React!")).toBeInTheDocument();
    expect(v.queryByText("Learn React")).toBeInTheDocument();
    expect(v.queryByText("Vite Docs")).toBeInTheDocument();
  });
  it("should show the count", () => {
    const v = render(<Greeting />);
    expect(v.queryByText("count is: 0")).toBeInTheDocument();
  });
});
