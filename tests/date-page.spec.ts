import { expect, test } from "@playwright/test"

test("render state cards after search by date", async ({ page }) => {
  await page.goto("http://localhost:3000/data")

  const inputDate = page.getByRole("textbox")
  const stateList = page.getByTestId("state-card").first()

  await expect(inputDate).toHaveAttribute("type", "date")
  await expect(stateList).not.toBeVisible()
  await inputDate.fill("2021-05-15")
  await inputDate.press("Enter")
  await expect(stateList).toBeVisible()
})
