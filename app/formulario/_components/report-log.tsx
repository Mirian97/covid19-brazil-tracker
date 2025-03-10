import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { FC } from 'react'
import { ReportFormSchema } from '../_schemas/report-schema'

type ReportLogProps = {
  submittedForm: ReportFormSchema | undefined
}

export const ReportLog: FC<ReportLogProps> = ({ submittedForm }) => {
  return (
    submittedForm && (
      <Card className='animate-scale-in h-fit gap-4 p-6'>
        <CardTitle>Dados Enviados</CardTitle>
        <CardContent className='p-0'>
          <pre className='overflow-auto rounded-lg bg-lime-200/70 p-4 text-sm'>
            {JSON.stringify(submittedForm, null, 2)}
          </pre>
        </CardContent>
      </Card>
    )
  )
}
