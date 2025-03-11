import Link from "next/link"
import { ComponentProps, ElementType, FC } from "react"
import { cn } from "../lib/utils"

interface NavItemProps extends ComponentProps<typeof Link> {
  icon: ElementType
  isActive: boolean
}

export const NavItem: FC<NavItemProps> = ({
  href,
  icon: Icon,
  children,
  isActive,
  className,
  ...restProps
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-lg px-4 py-3 transition-all duration-200",
        "hover:bg-accent group",
        isActive ? "bg-accent text-primary font-medium" : "text-foreground/70",
        className
      )}
      {...restProps}
    >
      <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
      <span>{children}</span>
    </Link>
  )
}
