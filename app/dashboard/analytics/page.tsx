"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, LineChart, TrendingUp, TrendingDown, Download } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("6months")

  // Sales Growth Data
  const salesGrowthData = [
    { month: "Jan", sales: 2400000, growth: 12.5 },
    { month: "Feb", sales: 2650000, growth: 15.2 },
    { month: "Mar", sales: 2890000, growth: 18.7 },
    { month: "Apr", sales: 2750000, growth: 14.3 },
    { month: "May", sales: 3100000, growth: 22.1 },
    { month: "Jun", sales: 2847392, growth: 18.2 },
  ]

  // Price Fluctuation Data
  const priceFluctuationData = [
    { product: "Denim Jacket", currentPrice: 179, previousPrice: 189, change: -5.3 },
    { product: "Designer Sneakers", currentPrice: 279, previousPrice: 299, change: -6.7 },
    { product: "Luxury Handbag", currentPrice: 599, previousPrice: 599, change: 0 },
    { product: "White Tee", currentPrice: 29, previousPrice: 25, change: 16.0 },
    { product: "Slim Jeans", currentPrice: 89, previousPrice: 95, change: -6.3 },
    { product: "Leather Boots", currentPrice: 199, previousPrice: 179, change: 11.2 },
  ]

  // Competitor Pricing Data
  const competitorData = [
    { brand: "Our Brand", price: 179, market_share: 23.7 },
    { brand: "Competitor A", price: 185, market_share: 18.2 },
    { brand: "Competitor B", price: 195, market_share: 15.8 },
    { brand: "Competitor C", price: 169, market_share: 12.4 },
    { brand: "Others", price: 188, market_share: 29.9 },
  ]

  // Market Share Data for Pie Chart
  const marketShareData = [
    { name: "Our Brand", value: 23.7, color: "hsl(var(--chart-1))" },
    { name: "Competitor A", value: 18.2, color: "hsl(var(--chart-2))" },
    { name: "Competitor B", value: 15.8, color: "hsl(var(--chart-3))" },
    { name: "Competitor C", value: 12.4, color: "hsl(var(--chart-4))" },
    { name: "Others", value: 29.9, color: "hsl(var(--chart-5))" },
  ]

  // Revenue by Category
  const categoryRevenueData = [
    { category: "Outerwear", revenue: 890000, percentage: 31.2 },
    { category: "Footwear", revenue: 720000, percentage: 25.3 },
    { category: "Accessories", revenue: 650000, percentage: 22.8 },
    { category: "Tops", revenue: 380000, percentage: 13.3 },
    { category: "Bottoms", revenue: 207392, percentage: 7.4 },
  ]

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}:{" "}
              {typeof entry.value === "number" && entry.value > 1000
                ? `$${(entry.value / 1000000).toFixed(1)}M`
                : entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-1 flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">
            Comprehensive charts and insights for sales, pricing, and market analysis
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Sales Growth Line Chart */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Sales Growth Trend
            </CardTitle>
            <CardDescription>Monthly sales performance and growth percentage over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={salesGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-muted-foreground" fontSize={12} />
                  <YAxis
                    className="text-muted-foreground"
                    fontSize={12}
                    tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--chart-1))", strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: "hsl(var(--chart-1))", strokeWidth: 2 }}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Price Fluctuation Bar Chart */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Price Fluctuations
              </CardTitle>
              <CardDescription>Price changes across product categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={priceFluctuationData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                      type="number"
                      className="text-muted-foreground"
                      fontSize={12}
                      tickFormatter={(value) => `${value > 0 ? "+" : ""}${value}%`}
                    />
                    <YAxis
                      type="category"
                      dataKey="product"
                      className="text-muted-foreground"
                      fontSize={12}
                      width={100}
                    />
                    <Tooltip
                      formatter={(value: any) => [`${value > 0 ? "+" : ""}${value}%`, "Price Change"]}
                      labelFormatter={(label) => `Product: ${label}`}
                    />
                    <Bar
                      dataKey="change"
                      fill={(entry: any) => (entry.change > 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))")}
                      radius={[0, 4, 4, 0]}
                    />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Market Share Pie Chart */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Market Share Distribution
              </CardTitle>
              <CardDescription>Competitive positioning in the market</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={marketShareData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {marketShareData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: any) => [`${value}%`, "Market Share"]} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {marketShareData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-muted-foreground">
                      {item.name}: {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Competitor Pricing Comparison */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Competitor Pricing Analysis
            </CardTitle>
            <CardDescription>Price positioning compared to key competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsBarChart data={competitorData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="brand" className="text-muted-foreground" fontSize={12} />
                  <YAxis className="text-muted-foreground" fontSize={12} tickFormatter={(value) => `$${value}`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="price" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Revenue by Category */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Category</CardTitle>
            <CardDescription>Performance breakdown across product categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryRevenueData.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="font-medium">{category.category}</div>
                    <Badge variant="secondary">{category.percentage}%</Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">${(category.revenue / 1000).toFixed(0)}K</div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
