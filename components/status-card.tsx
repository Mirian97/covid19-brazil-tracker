import { cn } from '@/lib/utils'
import { ComponentProps, ElementType, FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface StatusCardProps extends ComponentProps<'div'> {
  title: string
  value: number | string
  icon?: ElementType
  valueClassName?: string
  animate?: boolean
}

export const StatusCard: FC<StatusCardProps> = ({
  title,
  value,
  className,
  valueClassName
}) => {
  return (
    <Card className={cn('animate-scale-in gap-4 overflow-hidden', className)}>
      <CardHeader>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={cn('animate-slide-up text-2xl font-bold delay-100', valueClassName)}
        >
          {typeof value === 'number' ? value.toLocaleString('pt-BR') : value}
        </div>
      </CardContent>
    </Card>
  )
}
