import error from "../error.json";

describe("error", () => {
  describe("ja", () => {
    test("Page Not Found", () => {
      expect(error["Page Not Found"]).toBe("ページが見つかりません。");
    });
  });
});
