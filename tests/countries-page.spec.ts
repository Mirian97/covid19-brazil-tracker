import { expect, test } from "@playwright/test"

test("render country cards when search", async ({ page }) => {
  await page.goto("http://localhost:3000/paises")

  const inputText = page.getByRole("textbox", { name: "Buscar país..." })
  const hasCountryList = page.getByTestId("country-card").first()

  await expect(hasCountryList).toBeVisible()
  await inputText.click()
  await inputText.fill("br")
  await expect(hasCountryList).toBeVisible()
})
