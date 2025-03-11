import * as z from "zod"

export const reportFormSchema = z.object({
  state: z.string({
    required_error: "Selecione um estado."
  }),
  cases: z.coerce
    .number({
      required_error: "Informe o número de casos.",
      invalid_type_error: "Informe um número válido."
    })
    .nonnegative("O número deve ser positivo."),
  confirmed: z.coerce
    .number({
      required_error: "Informe o número de casos confirmados.",
      invalid_type_error: "Informe um número válido."
    })
    .nonnegative("O número deve ser positivo."),
  deaths: z.coerce
    .number({
      required_error: "Informe o número de óbitos.",
      invalid_type_error: "Informe um número válido."
    })
    .nonnegative("O número deve ser positivo."),
  recovered: z.coerce
    .number({
      required_error: "Informe o número de recuperados.",
      invalid_type_error: "Informe um número válido."
    })
    .nonnegative("O número deve ser positivo."),
  date: z
    .string()
    .date("Formato de data inválida.")
    .refine((date) => new Date(date) < new Date(), {
      message: "Data de vencimento deve ser posterior a hoje"
    })
})

export type ReportFormSchema = z.infer<typeof reportFormSchema>
