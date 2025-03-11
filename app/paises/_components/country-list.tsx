import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HookCountryReport } from "@/hooks/useCountryReport"
import { formatNumber } from "@/utils/formatNumber"
import { FC } from "react"

type CountryListProps = Pick<HookCountryReport, "countries" | "isLoading">

export const CountryList: FC<CountryListProps> = ({ isLoading, countries }) => {
  return isLoading ? null : countries?.length === 0 ? (
    <div className="animate-fade-in py-8 text-center">
      <p className="text-muted-foreground">
        Nenhum dado de país encontrado para o termo pesquisado.
      </p>
    </div>
  ) : (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries?.map((state, index: number) => (
        <Card
          key={state.country}
          className="animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{state.country}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 pt-0">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Confirmados:</span>
              <span className="font-medium">{formatNumber(state?.confirmed || 0)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Óbitos:</span>
              <span className="font-medium text-red-600">
                {formatNumber(state?.deaths || 0)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground text-sm">Recuperados:</span>
              <span className="font-medium text-green-700">
                {formatNumber(state?.recovered || 0)}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
