import { cn } from '@/lib/utils'
import { formatNumber } from '@/utils/formatNumber'
import { ComponentProps, ElementType, FC } from 'react'

interface StatusCardProps extends ComponentProps<'div'> {
  title: string
  value: number | string
  icon: ElementType
  animate?: boolean
  color?: 'success' | 'primary' | 'warning' | 'destructive'
}

const colorClasses = {
  success: {
    container: 'bg-lime-100 text-lime-950',
    icon: 'bg-lime-200/80 text-lime-900'
  },
  primary: {
    container: 'bg-blue-100 text-blue-950',
    icon: 'bg-blue-200 text-blue-900'
  },
  warning: {
    container: 'bg-yellow-100 text-yellow-950',
    icon: 'bg-yellow-200/70 text-yellow-900'
  },
  destructive: {
    container: 'bg-red-100 text-red-950',
    icon: 'bg-red-200/70 text-red-900'
  }
}

export const StatusCard: FC<StatusCardProps> = ({
  title,
  value,
  className,
  color = 'primary',
  icon: Icon
}) => {
  return (
    <div
      className={cn(
        'animate-scale-in grid grid-cols-[44px_1fr] gap-4 overflow-hidden rounded-xl p-4',
        colorClasses[color].container,
        className
      )}
    >
      <div
        className={cn(
          'flex size-11 items-center justify-center rounded-full p-2',
          colorClasses[color].icon
        )}
      >
        <Icon className='size-5' />
      </div>
      <div className='space-y-1'>
        <p className={cn('animate-slide-up text-2xl font-bold delay-100')}>
          {typeof value === 'number' ? formatNumber(value) : value}
        </p>
        <p className='text-sm font-medium'>{title}</p>
      </div>
    </div>
  )
}
