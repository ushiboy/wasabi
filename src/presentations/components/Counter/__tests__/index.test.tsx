import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "~/i18n/config";
import { Counter } from "..";

describe("Counter", () => {
  it("should show the count", () => {
    const v = render(<Counter count={123} onClick={() => {}} />);
    const el = v.container.querySelector("[data-hook=counter]");

    expect(el).toHaveTextContent("count is: 123");
  });
  it("should fire the onClick event when clicked", () => {
    const onClick = jest.fn(() => {});

    const v = render(<Counter count={0} onClick={onClick} />);
    const el = v.container.querySelector("[data-hook=counter]");

    fireEvent.click(el!);

    expect(onClick).toHaveBeenCalled();
  });
});
