import { expect, test } from "@playwright/test"

test("render dashboard", async ({ page }) => {
  await page.goto("http://localhost:3000/dashboard")

  await expect(page.getByRole("link", { name: "COVID-19 Brasil" })).toBeVisible()
  await expect(page.getByRole("heading", { name: "Balanço Geral" })).toBeVisible()
  await expect(page.getByText("Estados com Mais Casos")).toBeVisible()
})
