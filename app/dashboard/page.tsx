"use client"

import { motion } from "framer-motion"
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  BarChart3,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  const overviewCards = [
    {
      title: "Total Sales",
      value: "$2,847,392",
      change: "+12.5%",
      changeType: "positive" as const,
      description: "vs last month",
      icon: DollarSign,
    },
    {
      title: "Growth Rate",
      value: "18.2%",
      change: "+2.1%",
      changeType: "positive" as const,
      description: "quarterly growth",
      icon: TrendingUp,
    },
    {
      title: "Price Fluctuations",
      value: "±4.7%",
      change: "-1.2%",
      changeType: "negative" as const,
      description: "avg. volatility",
      icon: BarChart3,
    },
    {
      title: "Competitor Index",
      value: "94.3",
      change: "+0.8%",
      changeType: "positive" as const,
      description: "market position",
      icon: Users,
    },
  ]

  const recentActivity = [
    {
      product: "Premium Denim Jacket",
      action: "Price Updated",
      oldPrice: "$189",
      newPrice: "$179",
      time: "2 hours ago",
      trend: "down",
    },
    {
      product: "Designer Sneakers",
      action: "Competitor Alert",
      oldPrice: "$299",
      newPrice: "$279",
      time: "4 hours ago",
      trend: "down",
    },
    {
      product: "Luxury Handbag",
      action: "Sales Spike",
      oldPrice: "$599",
      newPrice: "$599",
      time: "6 hours ago",
      trend: "up",
    },
  ]

  const topProducts = [
    { name: "Classic White Tee", sales: 1247, revenue: "$24,940", growth: 15.2 },
    { name: "Slim Fit Jeans", sales: 892, revenue: "$89,200", growth: 8.7 },
    { name: "Leather Boots", sales: 634, revenue: "$126,800", growth: 22.1 },
    { name: "Cotton Hoodie", sales: 567, revenue: "$34,020", growth: -3.2 },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-1 flex-col gap-6">
      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {overviewCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{card.title}</CardTitle>
                <card.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{card.value}</div>
                <div className="flex items-center space-x-2 text-xs">
                  <Badge
                    variant={card.changeType === "positive" ? "default" : "destructive"}
                    className="flex items-center gap-1"
                  >
                    {card.changeType === "positive" ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {card.change}
                  </Badge>
                  <span className="text-muted-foreground">{card.description}</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest price updates and market movements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/30"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm">{activity.product}</div>
                      <div className="text-xs text-muted-foreground">{activity.action}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      {activity.trend === "down" ? (
                        <TrendingDown className="h-4 w-4 text-destructive" />
                      ) : (
                        <TrendingUp className="h-4 w-4 text-primary" />
                      )}
                      <div className="text-right">
                        <div className="text-sm font-medium">{activity.newPrice}</div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Top Products */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Top Products
              </CardTitle>
              <CardDescription>Best performing items this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm">{product.name}</div>
                      <Badge variant={product.growth > 0 ? "default" : "destructive"} className="text-xs">
                        {product.growth > 0 ? "+" : ""}
                        {product.growth}%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{product.sales} sales</span>
                      <span className="font-medium">{product.revenue}</span>
                    </div>
                    <Progress value={Math.abs(product.growth) * 5} className="h-1" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="grid gap-4 md:grid-cols-3"
      >
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Market Share</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23.7%</div>
            <Progress value={23.7} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+2.1% from last quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Avg. Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$127.50</div>
            <Progress value={68} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+$12.30 vs last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Customer Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89.2%</div>
            <Progress value={89.2} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">+1.8% improvement</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
