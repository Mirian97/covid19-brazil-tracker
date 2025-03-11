"use client"
import { queryClient } from "@/config/query-client"
import { QueryClientProvider } from "@tanstack/react-query"
import { FC, PropsWithChildren } from "react"

export const AllProviders: FC<PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
