import greeting from "../greeting.json";

describe("greeting", () => {
  describe("ja", () => {
    test("Hello", () => {
      expect(greeting["Hello"]).toBe("こんにちは Vite + React!");
    });
    test("Learn React", () => {
      expect(greeting["Learn React"]).toBe("Reactを学ぶ");
    });
    test("Vite Docs", () => {
      expect(greeting["Vite Docs"]).toBe("Viteの資料");
    });
    test("count is", () => {
      expect(greeting["count is"]).toBe("カウント: {{val}}");
    });
  });
});
