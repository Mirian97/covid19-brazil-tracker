import { expect, test } from "@playwright/test"

test("render state status when selected, when clear selection show state list", async ({
  page
}) => {
  await page.goto("http://localhost:3000/estados")

  const stateList = page.getByTestId("state-card").first()

  await expect(stateList).toBeVisible()
  await page.locator(".css-19bb58m").click()
  await page.getByRole("option", { name: "Bahia" }).click()
  await expect(page.getByRole("heading", { name: "Bahia" })).toBeVisible()
  await page.locator(".css-tj5bde-Svg").first().click()
  await expect(page.locator(".css-19bb58m")).toBeVisible()
  await expect(page.getByTestId("state-card").first()).toBeVisible()
})
