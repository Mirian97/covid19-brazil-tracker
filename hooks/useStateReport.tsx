'use client'
import { SelectOptionType } from '@/components/select'
import { reportService } from '@/services/report-service'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

const REPORT_STATES_QUERY_KEY = 'report-states'
const REPORT_STATE_QUERY_KEY = 'report-state'
const REPORT_COUNTRY_QUERY_KEY = 'report-country'

const useStateReport = () => {
  const [selectedState, setSelectedState] = useState<SelectOptionType | null>(null)

  const { data: statesData, isLoading: isLoadingStates } = useQuery({
    queryKey: [REPORT_STATES_QUERY_KEY],
    queryFn: reportService.getAllStates,
    select: (data) => data.data
  })

  const { data: stateData, isLoading: isLoadingState } = useQuery({
    queryKey: [REPORT_STATE_QUERY_KEY, selectedState],
    queryFn: async () => reportService.getOneState(selectedState?.value || ''),
    enabled: !!selectedState
  })

  const { data: brazilData, isLoading: isLoadingBrazilData } = useQuery({
    queryKey: [REPORT_COUNTRY_QUERY_KEY],
    queryFn: async () => reportService.getOneCountry('brazil'),
    select: (data) => data.data
  })

  const topTenStates = useMemo(
    () => statesData?.sort((a, b) => a.cases - b.cases).slice(0, 10),
    [statesData]
  )

  return {
    selectedState,
    setSelectedState,
    statesData,
    isLoadingStates,
    stateData,
    isLoadingState,
    brazilData,
    isLoadingBrazilData,
    topTenStates
  }
}

export default useStateReport
export type HookStateReport = ReturnType<typeof useStateReport>
