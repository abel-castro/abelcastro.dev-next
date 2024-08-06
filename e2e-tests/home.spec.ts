import { test, expect, Locator } from "@playwright/test";

test("main elements are visible", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/abelcastro.dev/);
  await expect(
    page.getByRole("heading", { name: "abelcastro.dev" })
  ).toBeVisible();

  // The page should have 3 posts
  const posts = page.locator("#post-container > .post-element");
  await expect(posts).toHaveCount(3);

  // Pagination
  await expect(page.getByTestId("pagination")).toBeVisible();

  // Back button pagination
  const paginationBack = page.getByTestId("pagination-back");
  await expect(paginationBack).toBeVisible();
  // We are loading the first page, so the back button should be disabled/not clickable
  await expect(
    await paginationBack.evaluate((e) =>
      (e as HTMLInputElement).hasAttribute("href")
    )
  ).toBeFalsy();

  // Forward button pagination
  const paginationForward = page.getByTestId("pagination-forward");
  await expect(paginationForward).toBeVisible();

  // The forward button should be clickable as we are on the first page
  await expect(
    await paginationForward.evaluate((e) =>
      (e as HTMLInputElement).hasAttribute("href")
    )
  ).toBeTruthy();

  // Search form
  await expect(page.getByTestId("search-form")).toBeVisible();
});

test("search works", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByTestId("search-form")).toBeVisible();
  await page.getByTestId("search-form").locator("input").fill("My first post");

  // The page should have 1 posts
  const posts = page.locator("#post-container > .post-element");
  await expect(posts).toHaveCount(1);
});
