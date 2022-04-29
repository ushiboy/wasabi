import { test, expect } from "@playwright/test";

test.describe("Greeting Page", () => {
  test("should increase in count each time the button is pressed", async ({
    page,
  }) => {
    // Go to http://localhost:3000/
    await page.goto("http://localhost:3000/");

    // Click text=count is: 0
    await page.locator("[data-hook=counter]").click();
    await expect(page.locator("[data-hook=counter]")).toHaveText("count is: 1");

    // Click text=count is: 1
    await page.locator("[data-hook=counter]").click();
    await expect(page.locator("[data-hook=counter]")).toHaveText("count is: 2");

    // Click text=count is: 2
    await page.locator("[data-hook=counter]").click();
    await expect(page.locator("[data-hook=counter]")).toHaveText("count is: 3");
  });
});
