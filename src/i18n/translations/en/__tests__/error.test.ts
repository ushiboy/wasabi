import error from "../error.json";

describe("error", () => {
  describe("en", () => {
    test("Page Not Found", () => {
      expect(error["Page Not Found"]).toBe("Page not found.");
    });
  });
});
