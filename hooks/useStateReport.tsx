'use client'
import { SelectOptionType } from '@/components/select'
import { reportService } from '@/services/report-service'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const REPORT_STATES_QUERY_KEY = 'report-states'
const REPORT_STATE_QUERY_KEY = 'report-state'

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

  return {
    selectedState,
    setSelectedState,
    statesData,
    isLoadingStates,
    stateData,
    isLoadingState
  }
}

export default useStateReport
export type HookStateReport = ReturnType<typeof useStateReport>
