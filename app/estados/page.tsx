'use client'
import { CustomSelect } from '@/components/select'
import { Title } from '@/components/title'
import { states } from '@/constants/states'
import useStateReport from '@/hooks/useStateReport'
import { StateDetail } from './_components/state-detail'
import { StateList } from './_components/state-list'

export default function PerStatesPage() {
  const { statesData, stateData, selectedState, setSelectedState, isLoadingState } =
    useStateReport()

  return (
    <>
      <Title
        title='Dados por Estado'
        description='Visualize os dados da COVID-19 por estado brasileiro.'
      />
      <CustomSelect
        isClearable
        options={states}
        value={selectedState}
        className='max-w-md'
        placeholder='Selecione um estado'
        onChange={(value) => setSelectedState(value)}
      />
      <div className='flex w-full flex-1 flex-col'>
        {selectedState?.value ? (
          <StateDetail stateData={stateData} isLoadingState={isLoadingState} />
        ) : (
          <StateList statesData={statesData} />
        )}
      </div>
    </>
  )
}
