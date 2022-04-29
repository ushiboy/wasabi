import { test, expect } from "@playwright/test";
import { GreetingPage } from "./pageObjects";

test.describe("Greeting Page", () => {
  test("should increase in count each time the button is pressed", async ({
    page,
  }) => {
    const p = new GreetingPage(page);
    await p.goto();

    await p.increaseCount();
    await expect(p.counter).toHaveText("count is: 1");

    await p.increaseCount();
    await expect(p.counter).toHaveText("count is: 2");

    await p.increaseCount();
    await expect(p.counter).toHaveText("count is: 3");
  });
});
