import { Loading } from '@/components/loading'
import { StatusCard } from '@/components/status-card'
import { HookStateReport } from '@/hooks/useStateReport'
import { AlertCircle, Ban, Skull, Users } from 'lucide-react'
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
          <StatusCard icon={Users} title='Casos Confirmados' value={stateData?.cases} />
          <StatusCard
            color='destructive'
            icon={Skull}
            title='Óbitos'
            value={stateData?.deaths}
          />
          <StatusCard
            color='warning'
            icon={AlertCircle}
            title='Suspeitos'
            value={stateData?.suspects}
          />
          <StatusCard
            color='success'
            icon={Ban}
            title='Descartados'
            value={stateData?.refuses}
          />
        </div>
      </div>
    )
  )
}
