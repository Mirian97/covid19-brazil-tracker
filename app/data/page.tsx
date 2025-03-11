"use client"
import { Title } from "@/components/title"
import { Input } from "@/components/ui/input"
import useStateReportByDate from "@/hooks/useStateByDateReport"
import { StateList } from "../estados/_components/state-list"

export default function PerDatePage() {
  const { data, selectedDate, setSelectedDate, isLoading } = useStateReportByDate()

  return (
    <>
      <Title
        title="Dados por Data"
        description="Visualize os dados da COVID-19 no Brasil em uma data específica."
      />
      <Input
        type="date"
        className="max-w-md"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <div className="flex max-w-7xl flex-1 flex-col">
        <StateList
          states={data}
          isLoading={isLoading}
          notFoundMessage="Nenhum dado encontrado para esta data."
        />
      </div>
    </>
  )
}
