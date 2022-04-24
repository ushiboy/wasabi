import greeting from "../greeting.json";

describe("greeting", () => {
  describe("en", () => {
    test("Hello", () => {
      expect(greeting["Hello"]).toBe("Hello Vite + React!");
    });
    test("Learn React", () => {
      expect(greeting["Learn React"]).toBe("Learn React");
    });
    test("Vite Docs", () => {
      expect(greeting["Vite Docs"]).toBe("Vite Docs");
    });
    test("count is", () => {
      expect(greeting["count is"]).toBe("count is: {{val}}");
    });
  });
});
