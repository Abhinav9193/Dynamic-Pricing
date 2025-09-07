"use client"

import { motion } from "framer-motion"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

export function DashboardHeader() {
  const pathname = usePathname()

  const getBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean)
    const breadcrumbs = []

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i]
      const href = "/" + segments.slice(0, i + 1).join("/")
      const isLast = i === segments.length - 1

      let title = segment.charAt(0).toUpperCase() + segment.slice(1)
      if (title === "Ai-insights") title = "AI Insights"

      breadcrumbs.push({
        title,
        href,
        isLast,
      })
    }

    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
    >
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={breadcrumb.href} className="flex items-center">
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {breadcrumb.isLast ? (
                    <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.title}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </motion.header>
  )
}
