import { cn } from "@/lib/utils"
import { ComponentProps, FC } from "react"

interface LoadingProps extends ComponentProps<"div"> {
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-3",
  lg: "h-12 w-12 border-4"
}

export const Loading: FC<LoadingProps> = ({ className, size = "md" }) => {
  return (
    <div className={cn("flex w-full items-center justify-center py-6", className)}>
      <div
        className={cn(
          "border-primary animate-spin rounded-full border-t-transparent",
          sizeClasses[size]
        )}
      />
    </div>
  )
}
