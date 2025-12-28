import { expect, test } from "@playwright/test";

test("navbar is visible", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.locator("nav")).toBeVisible();
});

test("Header is visible", async ({ page }) => {
  await page.goto("/contact");

  expect(await page.innerText("h1")).toBe("Contact and Booking");
});

test("Contact is visible", async ({ page }) => {
  await page.goto("/contact");

  await expect(page.getByText("paul@paulsandersmusic.com")).toBeVisible();
});
