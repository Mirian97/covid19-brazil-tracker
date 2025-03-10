'use client'
import { useSelectedLayoutSegment } from 'next/navigation'
import { menuList } from '../constants/menu-list'
import { NavItem } from './nav-item'

export const Sidebar = () => {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <aside className='sticky inset-y-0 top-1 hidden w-64 flex-col gap-1 border-r p-4 md:flex'>
      {menuList.map((item) => (
        <NavItem
          key={item.to}
          href={item.to}
          icon={item.icon}
          isActive={activeSegment === item.to.split('/')[1]}
        >
          {item.label}
        </NavItem>
      ))}
    </aside>
  )
}
