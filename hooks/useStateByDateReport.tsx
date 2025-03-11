"use client"
import { reportService } from "@/services/report-service"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

const REPORT_STATES_BY_DATE_QUERY_KEY = "report-states-by-date"

const useStateReportByDate = () => {
  const [selectedDate, setSelectedDate] = useState("")

  const { data, isLoading } = useQuery({
    queryKey: [REPORT_STATES_BY_DATE_QUERY_KEY, selectedDate],
    queryFn: () => reportService.getStatesByDate(selectedDate.replaceAll("-", "")),
    enabled: !!selectedDate,
    select: (data) => data.data
  })

  return {
    data,
    isLoading,
    selectedDate,
    setSelectedDate
  }
}

export default useStateReportByDate
