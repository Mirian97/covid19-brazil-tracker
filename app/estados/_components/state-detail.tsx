import { Loading } from '@/components/loading'
import { StatusCard } from '@/components/status-card'
import { HookStateReport } from '@/hooks/useStateReport'
import { FC } from 'react'

type StateDetailProps = Pick<HookStateReport, 'stateData' | 'isLoadingState'>

export const StateDetail: FC<StateDetailProps> = ({ isLoadingState, stateData }) => {
  return isLoadingState ? (
    <Loading className='m-auto' />
  ) : (
    stateData && (
      <div className='animate-fade-in mt-6 space-y-5'>
        <h2 className='text-2xl font-bold'>{stateData?.state}</h2>
        <p className='text-muted-foreground animate-fade-in text-sm'>
          Última atualização: {new Date(stateData?.datetime).toLocaleString('pt-BR')}
        </p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <StatusCard
            title='Casos Confirmados'
            value={stateData?.cases}
            className='border-l-4 border-l-blue-500'
          />
          <StatusCard
            title='Óbitos'
            value={stateData?.deaths}
            className='border-l-4 border-l-red-500'
            valueClassName='text-red-600'
          />
          <StatusCard
            title='Suspeitos'
            value={stateData?.suspects}
            className='border-l-4 border-l-yellow-500'
          />
          <StatusCard
            title='Descartados'
            value={stateData?.refuses}
            className='border-l-4 border-l-green-500'
          />
        </div>
      </div>
    )
  )
}
