import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StateStats } from "@/types/stats-type"
import { formatNumber } from "@/utils/formatNumber"
import { FC } from "react"

type StateListProps = {
  states: StateStats[] | undefined
  isLoading: boolean
  notFoundMessage?: string
}

export const StateList: FC<StateListProps> = ({
  states,
  isLoading,
  notFoundMessage = "Nenhum dado encontrado de estado encontrado."
}) => {
  return isLoading ? null : states?.length === 0 ? (
    <div className="animate-fade-in py-8 text-center">
      <p className="text-muted-foreground">{notFoundMessage}</p>
    </div>
  ) : (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {states?.map((state, index: number) => (
        <Card
          key={state.uid}
          className="animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{state.state}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Casos:</span>
              <span className="font-medium">{formatNumber(state.cases)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Suspeitos:</span>
              <span className="font-medium">{formatNumber(state.suspects)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Óbitos:</span>
              <span className="font-medium text-red-600">
                {formatNumber(state.deaths)}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
