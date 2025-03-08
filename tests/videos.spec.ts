import { type Page, expect, test } from "@playwright/test";

test("navbar is visible", async ({ page }) => {
  await page.goto("/videos");

  await expect(page.locator("nav")).toBeVisible();
});

test("Header is visible", async ({ page }) => {
  await page.goto("/videos");

  expect(await page.innerText("h1")).toBe("Videos");
});
