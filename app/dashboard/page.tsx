"use client"
import { Loading } from "@/components/loading"
import { StatusCard } from "@/components/status-card"
import { Title } from "@/components/title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartTooltip } from "@/components/ui/chart"
import useStateReport from "@/hooks/useStateReport"
import { formatNumber } from "@/utils/formatNumber"
import { Activity, AlertTriangle, Heart, Users } from "lucide-react"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

export default function DashboardPage() {
  const { isLoadingStates, brazilData, isLoadingBrazilData, topTenStates } =
    useStateReport()

  return (
    <>
      <Title
        title="Balanço Geral"
        description="Visualize os dados relevantes da COVID-19 no Brasil."
      />
      <div className="flex max-w-7xl flex-1 flex-col">
        {isLoadingStates || isLoadingBrazilData ? (
          <Loading />
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <StatusCard
                title="Casos Confirmados"
                value={brazilData?.confirmed || 0}
                animate={false}
                icon={Users}
              />
              <StatusCard
                title="Ativos"
                value={brazilData?.cases || 0}
                animate={false}
                icon={Activity}
                color="warning"
              />
              <StatusCard
                title="Óbitos"
                value={brazilData?.deaths || 0}
                animate={false}
                icon={AlertTriangle}
                color="destructive"
              />
              <StatusCard
                title="Recuperados"
                value={brazilData?.recovered || 0}
                animate={false}
                icon={Heart}
                color="success"
              />
            </div>
            <Card className="animate-scale-in gap-6 delay-100">
              <CardHeader>
                <CardTitle className="text-xl">Estados com Mais Casos</CardTitle>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={topTenStates}
                    margin={{ top: 5, right: 20, bottom: 25, left: 20 }}
                  >
                    <CartesianGrid
                      strokeDasharray="5 5"
                      vertical={false}
                      stroke="oklch(0.872 0.01 258.338)"
                    />
                    <XAxis
                      dataKey="state"
                      angle={-45}
                      textAnchor="end"
                      height={60}
                      tickLine={false}
                      tickMargin={10}
                      fontSize={14}
                      stroke="var(-color-muted-foreground)"
                      tickFormatter={(value) =>
                        value.length > 11 ? `${value.slice(0, 11)}...` : value
                      }
                    />
                    <YAxis
                      tickLine={false}
                      fontSize={14}
                      stroke="var(-color-muted-foreground)"
                    />
                    <ChartTooltip
                      formatter={(value) => [formatNumber(Number(value)), "Casos"]}
                      contentStyle={{
                        background: "white",
                        border: "1px solid #f0f0f0",
                        borderRadius: "8px"
                      }}
                    />
                    <Bar
                      dataKey="cases"
                      fill="hsl(var(--primary))"
                      barSize={60}
                      radius={6}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            {brazilData?.updated_at && (
              <p className="text-muted-foreground animate-fade-in text-center text-sm">
                Última atualização:{" "}
                {new Date(brazilData.updated_at).toLocaleString("pt-BR")}
              </p>
            )}
          </div>
        )}
      </div>
    </>
  )
}
