import { expect, test } from "@playwright/test";

test("navbar is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("nav")).toBeVisible();
});

test("Header is visible", async ({ page }) => {
  await page.goto("/");

  expect(await page.innerText("h1")).toBe("Paul Sanders Music");
});

test("About is visible", async ({ page }) => {
  await page.goto("/");

  const about = page.locator("h2").filter({ hasText: "About" });
  await expect(about).toBeVisible();
});

test("Videos is visible", async ({ page }) => {
  await page.goto("/");

  const about = page.locator("h2").filter({ hasText: "Videos" });
  await expect(about).toBeVisible();
});

test("Contact form is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("form")).toBeVisible();
});
