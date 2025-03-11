import { BarChart3, Calendar, FileText, Globe, Home } from "lucide-react"

export const menuList = [
  { to: "/dashboard", label: "Dashboard", icon: Home },
  { to: "/estados", label: "Por Estados", icon: BarChart3 },
  { to: "/data", label: "Por Data", icon: Calendar },
  { to: "/paises", label: "Por Países", icon: Globe },
  { to: "/formulario", label: "Formulário", icon: FileText }
]
