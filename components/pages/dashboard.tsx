'use client';

import { Card } from '@/components/ui/card';
import { TrendingUp, DollarSign, Zap, Activity, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      label: 'Total Transactions',
      value: '1,240',
      icon: TrendingUp,
      gradient: 'from-blue-600 to-cyan-500',
      trend: '+12.5%',
      subtext: 'vs last month',
    },
    {
      label: 'Capital Freed',
      value: '$5.2M',
      icon: DollarSign,
      gradient: 'from-emerald-600 to-teal-500',
      trend: '+8.3%',
      subtext: 'vs last month',
    },
    {
      label: 'Avg Settlement Time',
      value: '8.5s',
      icon: Zap,
      gradient: 'from-amber-600 to-orange-500',
      trend: '-15%',
      subtext: 'improvement',
    },
  ];

  const poolsData = [
    {
      name: 'INR Pool',
      amount: '₹2.5 Cr',
      available: '₹250,000,000 Available',
      utilization: 68,
      corridors: 45,
      volume: '₹8.2 Cr',
      color: 'from-blue-600 to-indigo-500',
    },
    {
      name: 'AED Pool',
      amount: 'AED 1.4 M',
      available: 'AED 1,400,000 Available',
      utilization: 55,
      corridors: 38,
      volume: 'AED 760K',
      color: 'from-emerald-600 to-teal-500',
    },
  ];

  const healthMetrics = [
    { label: 'API Uptime', value: '99.99%', icon: Activity },
    { label: 'Settlement Rate', value: '98.8%', icon: TrendingUp },
    { label: 'Response Time', value: '145ms', icon: Zap },
    { label: 'Liquidity Ratio', value: '1.8x', icon: DollarSign },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fadeInUp space-y-2">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">Real-time settlement layer intelligence</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer hover:scale-105 relative"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span className="text-sm font-semibold">{stat.trend}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{stat.subtext}</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden mt-4">
                  <div className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000`} style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Liquidity Pools */}
      <Card className="p-8 border-0 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">Liquidity Pools</h2>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-sm font-medium">Live</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {poolsData.map((pool, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-background to-muted/30 rounded-xl p-6 border border-border hover:border-primary/30 transition-colors duration-300 group"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${pool.color} text-white`}>
                        <DollarSign className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground">{pool.name}</h3>
                    </div>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${pool.color} bg-clip-text text-transparent`}>
                      {pool.amount}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pool.available}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-muted-foreground">Pool Utilization</span>
                    <span className="font-bold text-foreground">{pool.utilization}%</span>
                  </div>
                  <div className="h-2.5 bg-border rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${pool.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${pool.utilization}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="space-y-1 group/item">
                    <p className="text-xs text-muted-foreground">Active Corridors</p>
                    <p className="text-xl font-bold text-foreground group-hover/item:scale-110 transition-transform">{pool.corridors}</p>
                  </div>
                  <div className="space-y-1 group/item">
                    <p className="text-xs text-muted-foreground">24h Volume</p>
                    <p className="text-xl font-bold text-foreground group-hover/item:scale-110 transition-transform">{pool.volume}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* System Health */}
      <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-foreground">System Health</h2>
          <div className="px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-700 border border-emerald-200">
            <span className="text-sm font-semibold">All Systems Operational</span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {healthMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors duration-300 group"
                style={{ animationDelay: `${0.5 + index * 0.05}s` }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">{metric.label}</p>
                    <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  <div className="flex items-center gap-2 pt-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <p className="text-xs text-emerald-600 font-semibold">Healthy</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
