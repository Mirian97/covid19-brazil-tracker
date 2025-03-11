"use client"
import { CustomSelect } from "@/components/select"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { states } from "@/constants/states"
import { toast } from "@/utils/toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { reportFormSchema, ReportFormSchema } from "../_schemas/report-schema"

type ReportFormProps = {
  setSubmittedForm: (form: ReportFormSchema) => void
}

export const ReportForm: FC<ReportFormProps> = ({ setSubmittedForm }) => {
  const form = useForm<ReportFormSchema>({
    resolver: zodResolver(reportFormSchema),
    defaultValues: {
      cases: undefined,
      confirmed: undefined,
      deaths: undefined,
      recovered: undefined,
      date: undefined,
      state: undefined
    }
  })

  const onSubmit = (data: ReportFormSchema) => {
    console.log("Formulário enviado:", data)
    setSubmittedForm(data)
    toast({
      title: "Dados enviados",
      text: "Obrigada por sua contribuição"
    })
  }

  return (
    <Card className="animate-scale-in p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <CustomSelect
                  options={states}
                  onBlur={field.onBlur}
                  value={
                    (field.value &&
                      states.find((entry) => entry.value === field.value)) ||
                    null
                  }
                  placeholder="Selecione um estado"
                  onChange={(value) => field.onChange(value?.value)}
                />
                <FormDescription>Selecione o estado brasileiro.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cases"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Casos</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Número de casos" {...field} />
                </FormControl>
                <FormDescription>Informe o número total de casos.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmados</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Número de casos confirmados"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Informe o número de casos confirmados.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deaths"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Óbitos</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Número de óbitos" {...field} />
                </FormControl>
                <FormDescription>Informe o número de óbitos.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="recovered"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recuperados</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Número de recuperados" {...field} />
                </FormControl>
                <FormDescription>Informe o número de recuperados.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data</FormLabel>
                <Input
                  type="date"
                  max={new Date().toISOString().split("T")[0]}
                  {...field}
                />
                <FormDescription>Selecione a data de referência.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Enviar
          </Button>
        </form>
      </Form>
    </Card>
  )
}
