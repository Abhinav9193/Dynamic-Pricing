"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
  Eye,
  Edit,
  AlertTriangle,
  Package,
  DollarSign,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductAnalyticsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const productData = [
    {
      id: 1,
      name: "Premium Denim Jacket",
      brand: "Urban Style",
      category: "Outerwear",
      currentPrice: 179,
      originalPrice: 189,
      priceChange: -5.3,
      competitorPrice: 185,
      competitorDiff: -3.2,
      sales: 234,
      revenue: 41886,
      trend: "down",
      status: "active",
      lastUpdated: "2 hours ago",
    },
    {
      id: 2,
      name: "Designer Sneakers",
      brand: "SportLux",
      category: "Footwear",
      currentPrice: 279,
      originalPrice: 299,
      priceChange: -6.7,
      competitorPrice: 295,
      competitorDiff: -5.4,
      sales: 156,
      revenue: 43524,
      trend: "up",
      status: "active",
      lastUpdated: "4 hours ago",
    },
    {
      id: 3,
      name: "Luxury Handbag",
      brand: "Elite Fashion",
      category: "Accessories",
      currentPrice: 599,
      originalPrice: 599,
      priceChange: 0,
      competitorPrice: 649,
      competitorDiff: -7.7,
      sales: 89,
      revenue: 53311,
      trend: "up",
      status: "active",
      lastUpdated: "6 hours ago",
    },
    {
      id: 4,
      name: "Classic White Tee",
      brand: "Basic Essentials",
      category: "Tops",
      currentPrice: 29,
      originalPrice: 25,
      priceChange: 16.0,
      competitorPrice: 32,
      competitorDiff: -9.4,
      sales: 1247,
      revenue: 36163,
      trend: "up",
      status: "active",
      lastUpdated: "1 day ago",
    },
    {
      id: 5,
      name: "Slim Fit Jeans",
      brand: "Denim Co.",
      category: "Bottoms",
      currentPrice: 89,
      originalPrice: 95,
      priceChange: -6.3,
      competitorPrice: 92,
      competitorDiff: -3.3,
      sales: 892,
      revenue: 79388,
      trend: "stable",
      status: "active",
      lastUpdated: "1 day ago",
    },
    {
      id: 6,
      name: "Leather Boots",
      brand: "Heritage Craft",
      category: "Footwear",
      currentPrice: 199,
      originalPrice: 179,
      priceChange: 11.2,
      competitorPrice: 215,
      competitorDiff: -7.4,
      sales: 634,
      revenue: 126166,
      trend: "up",
      status: "active",
      lastUpdated: "2 days ago",
    },
  ]

  const filteredProducts = productData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category.toLowerCase() === categoryFilter.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-primary" />
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />
      default:
        return <div className="h-4 w-4 rounded-full bg-muted-foreground" />
    }
  }

  const getPriceChangeColor = (change: number) => {
    if (change > 0) return "text-primary"
    if (change < 0) return "text-destructive"
    return "text-muted-foreground"
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-1 flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Product Analytics</h1>
          <p className="text-muted-foreground">Monitor pricing, trends, and competitor analysis for your products</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button size="sm">
            <Package className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{productData.length}</div>
              <p className="text-xs text-muted-foreground">Active in catalog</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Price</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${Math.round(productData.reduce((acc, p) => acc + p.currentPrice, 0) / productData.length)}
              </div>
              <p className="text-xs text-muted-foreground">Across all products</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Price Alerts</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Competitor price changes</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${productData.reduce((acc, p) => acc + p.revenue, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">This month</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle>Product Catalog</CardTitle>
            <CardDescription>
              Detailed analytics for all products including pricing trends and competitor data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 w-[300px]"
                  />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="outerwear">Outerwear</SelectItem>
                    <SelectItem value="footwear">Footwear</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="tops">Tops</SelectItem>
                    <SelectItem value="bottoms">Bottoms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Current Price</TableHead>
                    <TableHead>Price Change</TableHead>
                    <TableHead>Competitor Price</TableHead>
                    <TableHead>Sales</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Trend</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product, index) => (
                    <motion.tr
                      key={product.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      className="group"
                    >
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {product.brand} • {product.category}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="font-medium">${product.currentPrice}</div>
                          {product.originalPrice !== product.currentPrice && (
                            <div className="text-sm text-muted-foreground line-through">${product.originalPrice}</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            product.priceChange > 0 ? "default" : product.priceChange < 0 ? "destructive" : "secondary"
                          }
                          className="flex items-center gap-1 w-fit"
                        >
                          {product.priceChange > 0 ? "+" : ""}
                          {product.priceChange}%
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <div className="font-medium">${product.competitorPrice}</div>
                          <div className={`text-sm ${getPriceChangeColor(product.competitorDiff)}`}>
                            {product.competitorDiff > 0 ? "+" : ""}
                            {product.competitorDiff}%
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{product.sales.toLocaleString()}</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">${product.revenue.toLocaleString()}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getTrendIcon(product.trend)}
                          <span className="text-sm capitalize">{product.trend}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Price
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <TrendingUp className="mr-2 h-4 w-4" />
                              View Analytics
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
