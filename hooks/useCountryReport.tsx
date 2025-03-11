"use client"
import { reportService } from "@/services/report-service"
import { useQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"

const REPORT_COUNTRIES_QUERY_KEY = "report-countries"

const useCountryReport = () => {
  const [search, setSearch] = useState<string>("")

  const { data, isLoading } = useQuery({
    queryKey: [REPORT_COUNTRIES_QUERY_KEY],
    queryFn: reportService.getAllCountries,
    select: (data) => data.data
  })

  const filteredCountries = useMemo(
    () =>
      data?.filter((entry) =>
        entry?.country?.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  )

  return {
    countries: search.length ? filteredCountries : data,
    isLoading,
    search,
    setSearch
  }
}

export default useCountryReport
export type HookCountryReport = ReturnType<typeof useCountryReport>
