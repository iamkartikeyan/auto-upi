'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign, Activity, Zap } from 'lucide-react';

export default function LiquidityPoolsPage() {
  const poolsData = [
    {
      name: 'INR Pool',
      icon: DollarSign,
      total: '₹2.5 Cr',
      available: '₹250,000,000 Available',
      utilization: 68,
      volume: '₹8.2 Cr',
      routes: 45,
      color: 'from-blue-600 to-cyan-500',
      badge: 'Primary',
      badgeVariant: 'default' as const,
    },
    {
      name: 'AED Pool',
      icon: DollarSign,
      total: 'AED 1.4M',
      available: 'AED 1,400,000 Available',
      utilization: 55,
      volume: 'AED 760K',
      routes: 38,
      color: 'from-purple-600 to-pink-500',
      badge: 'Secondary',
      badgeVariant: 'secondary' as const,
    },
    {
      name: 'Performance',
      icon: TrendingUp,
      total: '1.8x',
      available: 'Liquidity Ratio',
      metrics: [
        { label: 'Settlement Speed', value: '10s avg', icon: Zap },
        { label: 'Success Rate', value: '99.2%', icon: Activity },
      ],
      color: 'from-amber-600 to-orange-500',
      badge: 'Live',
      badgeVariant: 'outline' as const,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fadeInUp space-y-2">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Liquidity Pools
        </h1>
        <p className="text-lg text-muted-foreground">Monitor and manage your settlement liquidity</p>
      </div>

      {/* Pools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {poolsData.map((pool, index) => {
          const Icon = pool.icon;
          return (
            <Card
              key={pool.name}
              className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${pool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${pool.color} text-white group-hover:shadow-lg transition-all`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-foreground">{pool.name}</h3>
                      <Badge variant={pool.badgeVariant} className="mt-1">
                        {pool.badge}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div className="space-y-1">
                  <p className={`text-3xl font-bold bg-gradient-to-r ${pool.color} bg-clip-text text-transparent`}>
                    {pool.total}
                  </p>
                  <p className="text-sm text-muted-foreground">{pool.available}</p>
                </div>

                {/* Utilization Bar (for pool cards) */}
                {pool.utilization !== undefined && (
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-semibold">Pool Utilization</span>
                      <span className={`font-bold bg-gradient-to-r ${pool.color} bg-clip-text text-transparent`}>
                        {pool.utilization}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-border rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${pool.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${pool.utilization}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Metrics */}
                {pool.routes !== undefined ? (
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/40">
                    <div className="group/metric">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">24h Volume</p>
                      <p className="text-lg font-bold text-foreground mt-1 group-hover/metric:scale-110 transition-transform">
                        {pool.volume}
                      </p>
                    </div>
                    <div className="group/metric">
                      <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Active Routes</p>
                      <p className="text-lg font-bold text-foreground mt-1 group-hover/metric:scale-110 transition-transform">
                        {pool.routes}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 pt-4 border-t border-border/40">
                    {pool.metrics?.map((metric, idx) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={idx} className="flex items-center justify-between group/metric">
                          <div className="flex items-center gap-2">
                            <MetricIcon className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{metric.label}</span>
                          </div>
                          <span className="font-bold text-emerald-600 group-hover/metric:scale-110 transition-transform origin-right">
                            {metric.value}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

