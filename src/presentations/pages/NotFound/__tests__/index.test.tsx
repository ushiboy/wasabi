import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import "~/i18n/config";
import { NotFound } from "..";

describe("NotFound", () => {
  it("should show 'Page not found.'", () => {
    const v = render(<NotFound />);
    expect(v.queryByText("Page not found.")).toBeInTheDocument();
  });
});
