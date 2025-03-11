"use client"
import { Title } from "@/components/title"
import { useState } from "react"
import { ReportForm } from "./_components/report-form"
import { ReportLog } from "./_components/report-log"
import { ReportFormSchema } from "./_schemas/report-schema"

export default function FormPage() {
  const [submittedForm, setSubmittedForm] = useState<ReportFormSchema>()

  return (
    <>
      <Title
        title="Formulário de Dados"
        description="Preencha os dados sobre a COVID-19 para um estado brasileiro."
      />
      <div className="grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
        <ReportForm setSubmittedForm={setSubmittedForm} />
        <ReportLog submittedForm={submittedForm} />
      </div>
    </>
  )
}
