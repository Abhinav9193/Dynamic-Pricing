"use client"
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { Home, Package, TrendingUp, Users, Settings, LogOut, BarChart3, Brain, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Products",
    url: "/dashboard/products",
    icon: Package,
  },
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    title: "Competitors",
    url: "/dashboard/competitors",
    icon: Users,
  },
  {
    title: "AI Insights",
    url: "/dashboard/ai-insights",
    icon: Brain,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated")
    router.push("/login")
  }

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 px-2 py-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <TrendingUp className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">Fashion Intelligence</span>
            <span className="text-xs text-muted-foreground">Pricing Dashboard</span>
          </div>
        </motion.div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.url}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === item.url} tooltip={item.title}>
                  <a href={item.url} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </motion.div>
          ))}
        </SidebarMenu>

        <SidebarSeparator className="my-4" />

        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Settings">
              <a href="/dashboard/settings" className="flex items-center gap-3">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center justify-between p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex h-auto w-full justify-start gap-3 p-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/professional-manager.png" />
                  <AvatarFallback className="bg-primary text-primary-foreground">FM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-medium">Fashion Manager</span>
                  <span className="text-xs text-muted-foreground">manager@brand.com</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
                Toggle theme
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
