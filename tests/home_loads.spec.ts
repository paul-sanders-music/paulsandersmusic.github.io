import { expect, test } from "@playwright/test";

test("navbar is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("nav")).toBeVisible();
});

test("Header is visible", async ({ page }) => {
  await page.goto("/");

  expect(await page.innerText("h1")).toBe("Paul Sanders Music");
});
