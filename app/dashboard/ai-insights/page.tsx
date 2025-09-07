"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Brain,
  TrendingUp,
  Target,
  Zap,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  BarChart3,
  Lightbulb,
  ArrowRight,
  RefreshCw,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export default function AIInsightsPage() {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateInsights = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 2000)
  }

  const pricingRecommendations = [
    {
      id: 1,
      product: "Premium Denim Jacket",
      currentPrice: 179,
      recommendedPrice: 185,
      confidence: 92,
      potentialRevenue: "+$12,400",
      reasoning: "Market demand is high, competitor prices average $195. Optimal price point for maximum revenue.",
      impact: "high",
      timeframe: "3-5 days",
      factors: ["Market Demand", "Competitor Analysis", "Historical Performance"],
    },
    {
      id: 2,
      product: "Designer Sneakers",
      currentPrice: 279,
      recommendedPrice: 265,
      confidence: 87,
      potentialRevenue: "+$8,900",
      reasoning: "Price reduction will increase volume significantly. Competitor undercut detected.",
      impact: "medium",
      timeframe: "1-2 days",
      factors: ["Competitor Pricing", "Volume Optimization", "Seasonal Trends"],
    },
    {
      id: 3,
      product: "Luxury Handbag",
      currentPrice: 599,
      recommendedPrice: 629,
      confidence: 95,
      potentialRevenue: "+$18,700",
      reasoning: "Premium positioning opportunity. Brand perception supports higher pricing.",
      impact: "high",
      timeframe: "1 week",
      factors: ["Brand Positioning", "Market Sentiment", "Inventory Levels"],
    },
  ]

  const marketInsights = [
    {
      title: "Seasonal Trend Alert",
      description: "Winter apparel demand increasing 23% ahead of forecast",
      type: "opportunity",
      confidence: 89,
      action: "Consider increasing winter collection prices by 8-12%",
    },
    {
      title: "Competitor Price War",
      description: "Major competitor reduced sneaker prices by 15% across the board",
      type: "threat",
      confidence: 94,
      action: "Implement dynamic pricing strategy for footwear category",
    },
    {
      title: "Inventory Optimization",
      description: "Slow-moving items detected in accessories category",
      type: "warning",
      confidence: 78,
      action: "Apply 10-15% discount to clear inventory within 2 weeks",
    },
  ]

  const aiMetrics = [
    { label: "Prediction Accuracy", value: 94.2, trend: "up" },
    { label: "Revenue Optimization", value: 87.5, trend: "up" },
    { label: "Market Coverage", value: 91.8, trend: "stable" },
    { label: "Response Time", value: 96.1, trend: "up" },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "text-primary"
      case "medium":
        return "text-secondary"
      case "low":
        return "text-muted-foreground"
      default:
        return "text-muted-foreground"
    }
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "opportunity":
        return <TrendingUp className="h-4 w-4 text-primary" />
      case "threat":
        return <AlertCircle className="h-4 w-4 text-destructive" />
      case "warning":
        return <Clock className="h-4 w-4 text-secondary" />
      default:
        return <Lightbulb className="h-4 w-4 text-muted-foreground" />
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-1 flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Pricing Intelligence</h1>
          <p className="text-muted-foreground">Smart recommendations powered by machine learning and market analysis</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleGenerateInsights} disabled={isGenerating}>
            {isGenerating ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <Brain className="h-4 w-4 mr-2" />}
            {isGenerating ? "Analyzing..." : "Generate Insights"}
          </Button>
          <Button size="sm">
            <Target className="h-4 w-4 mr-2" />
            Apply All
          </Button>
        </div>
      </div>

      {/* AI Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {aiMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                {metric.trend === "up" ? (
                  <TrendingUp className="h-4 w-4 text-primary" />
                ) : (
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}%</div>
                <Progress value={metric.value} className="mt-2" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pricing Recommendations */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Smart Pricing Recommendations
            </CardTitle>
            <CardDescription>AI-powered price optimization based on market data and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {pricingRecommendations.map((rec, index) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-lg border bg-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{rec.product}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Current:</span>
                          <span className="font-medium">${rec.currentPrice}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Recommended:</span>
                          <span className="font-bold text-primary">${rec.recommendedPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {rec.confidence}% Confidence
                      </Badge>
                      <div className={`text-sm font-medium ${getImpactColor(rec.impact)}`}>{rec.potentialRevenue}</div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{rec.reasoning}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Implement in {rec.timeframe}</span>
                      </div>
                      <Badge
                        variant={rec.impact === "high" ? "default" : rec.impact === "medium" ? "secondary" : "outline"}
                        className="capitalize"
                      >
                        {rec.impact} Impact
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button size="sm">Apply Price</Button>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Key Factors:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {rec.factors.map((factor, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {factor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Market Insights */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Market Intelligence
            </CardTitle>
            <CardDescription>Real-time insights and alerts from market analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-4 rounded-lg border bg-card"
                >
                  <div className="flex items-start gap-3">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <h4 className="font-medium mb-1">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {insight.confidence}% Confidence
                        </Badge>
                      </div>
                      <div className="p-3 bg-muted/30 rounded-md">
                        <p className="text-sm font-medium">Recommended Action:</p>
                        <p className="text-sm text-muted-foreground mt-1">{insight.action}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="grid gap-4 md:grid-cols-3"
      >
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Revenue Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">+$39,000</div>
            <p className="text-xs text-muted-foreground mt-1">Potential monthly increase</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Success Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94.2%</div>
            <p className="text-xs text-muted-foreground mt-1">AI recommendation accuracy</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Target className="h-4 w-4" />
              Active Strategies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">Currently running</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
