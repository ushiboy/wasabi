import { Locator, Page } from "@playwright/test";

export class GreetingPage {
  readonly page: Page;
  readonly counter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.counter = page.locator("[data-hook=counter]");
  }

  async goto() {
    return this.page.goto("http://localhost:3000/");
  }

  async increaseCount() {
    return this.counter.click();
  }
}
