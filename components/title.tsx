import { cn } from '@/lib/utils'
import { ComponentProps, FC } from 'react'

interface TitleProps extends ComponentProps<'div'> {
  title: string
  description?: string
}

const Title: FC<TitleProps> = ({ className, title, description }) => {
  return (
    <div className={cn('mb-6 space-y-2', className)}>
      <h1 className='text-3xl font-bold tracking-tight'>{title}</h1>
      {description && <p className='text-muted-foreground text-balance'>{description}</p>}
    </div>
  )
}

export { Title }
