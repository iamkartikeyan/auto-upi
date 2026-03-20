'use client';

import { Card } from '@/components/ui/card';
import { TrendingUp, DollarSign, Zap } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    {
      label: 'Total Transactions',
      value: '120',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
    },
    {
      label: 'Capital Freed',
      value: '$5.0M',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
    },
    {
      label: 'Avg Settlement Time',
      value: '10 sec',
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">Real-time system overview and liquidity management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-muted-foreground">{stat.label}</h3>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                </div>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-primary/50 w-3/4 rounded-full"></div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Liquidity Pools */}
      <Card className="p-8 border-0 shadow-lg">
        <h2 className="text-2xl font-bold text-foreground mb-8">Liquidity Pools</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* INR Pool */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground">INR Pool</h3>
                <span className="text-2xl font-bold text-primary">₹2.5 Cr</span>
              </div>
              <p className="text-sm text-muted-foreground">₹250,000,000 Available</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-muted-foreground">Pool Utilization</span>
                <span className="font-semibold text-foreground">68%</span>
              </div>
              <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary/50 rounded-full" style={{ width: '68%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Active Corridors</p>
                <p className="font-bold text-foreground">45</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">24h Volume</p>
                <p className="font-bold text-foreground">₹8.2 Cr</p>
              </div>
            </div>
          </div>

          {/* AED Pool */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground">AED Pool</h3>
                <span className="text-2xl font-bold text-primary">AED 1.4 M</span>
              </div>
              <p className="text-sm text-muted-foreground">AED 1,400,000 Available</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-muted-foreground">Pool Utilization</span>
                <span className="font-semibold text-foreground">55%</span>
              </div>
              <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '55%' }}></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Active Corridors</p>
                <p className="font-bold text-foreground">38</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">24h Volume</p>
                <p className="font-bold text-foreground">AED 760K</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* System Health */}
      <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-slate-50 to-blue-50/30">
        <h2 className="text-2xl font-bold text-foreground mb-6">System Health</h2>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: 'API Uptime', value: '99.99%', status: 'healthy' },
            { label: 'Settlement Rate', value: '98.8%', status: 'healthy' },
            { label: 'Avg Response Time', value: '145ms', status: 'healthy' },
            { label: 'Liquidity Ratio', value: '1.8x', status: 'healthy' },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 space-y-2">
              <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
              <p className="text-2xl font-bold text-foreground">{item.value}</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-xs text-green-600 font-medium">Healthy</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
