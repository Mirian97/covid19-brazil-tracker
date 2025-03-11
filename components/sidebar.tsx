"use client"
import { useSelectedLayoutSegment } from "next/navigation"
import { menuList } from "../constants/menu-list"
import { NavItem } from "./nav-item"

export const Sidebar = () => {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <aside className="fixed inset-0 left-0 z-10 hidden w-64 flex-col gap-1 overflow-y-auto border-r p-4 pt-20 md:flex">
      {menuList.map((item) => (
        <NavItem
          key={item.to}
          href={item.to}
          icon={item.icon}
          isActive={activeSegment === item.to.split("/")[1]}
        >
          {item.label}
        </NavItem>
      ))}
    </aside>
  )
}
