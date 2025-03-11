"use client"
import { BarChart3, Menu } from "lucide-react"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { useState } from "react"
import { menuList } from "../constants/menu-list"
import { NavItem } from "./nav-item"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const activeSegment = useSelectedLayoutSegment()

  return (
    <header className="border-border/40 bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BarChart3 className="text-primary h-6 w-6" />
          <span className="text-xl font-semibold tracking-tight">COVID-19 Brasil</span>
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-foreground/70 hover:text-foreground p-2 transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="flex h-full flex-col py-4">
              <SheetTitle className="mb-4 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-primary h-6 w-6" />
                  <span className="text-xl font-semibold tracking-tight">
                    COVID-19 Brasil
                  </span>
                </div>
              </SheetTitle>
              <nav className="flex flex-1 flex-col gap-1 px-2">
                {menuList.map((item) => (
                  <NavItem
                    key={item.to}
                    href={item.to}
                    icon={item.icon}
                    onClick={closeMenu}
                    isActive={activeSegment === item.to.split("/")[1]}
                  >
                    {item.label}
                  </NavItem>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
