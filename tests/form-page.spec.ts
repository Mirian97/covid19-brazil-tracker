import { expect, test } from "@playwright/test"

const inputForm = {
  cases: "100",
  confirmed: "102",
  deaths: "104",
  recovered: "106",
  date: "2025-02-15"
}

test("send form and show the output aside", async ({ page }) => {
  await page.goto("http://localhost:3000/formulario")

  const casesInput = page.getByRole("spinbutton", { name: "Casos" })
  const confirmedInput = page.getByRole("spinbutton", { name: "Confirmados" })
  const deathsInput = page.getByRole("spinbutton", { name: "Óbitos" })
  const recoveredInput = page.getByRole("spinbutton", { name: "Recuperados" })

  await page.locator(".css-19bb58m").click()
  await page.getByRole("option", { name: "Amazonas" }).click()
  await casesInput.fill(inputForm.cases)
  await casesInput.press("Tab")
  await confirmedInput.fill(inputForm.confirmed)
  await confirmedInput.press("Tab")
  await deathsInput.fill(inputForm.deaths)
  await confirmedInput.press("Tab")
  await recoveredInput.fill(inputForm.recovered)
  await deathsInput.press("Tab")
  await recoveredInput.press("Tab")
  await page.getByRole("textbox").fill(inputForm.date)
  await page.getByRole("button", { name: "Enviar" }).click()
  await expect(page.getByText("Dados Enviados").first()).toBeVisible()
})
