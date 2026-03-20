'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, LineChart, PieChart, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function AnalyticsPage() {
  const metrics = [
    {
      title: 'Daily Transactions',
      value: '1,247',
      change: '+12.5%',
      label: 'vs yesterday',
      icon: BarChart3,
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'Conversion Rate',
      value: '4.8%',
      change: '+2.3%',
      progress: 48,
      icon: TrendingUp,
      gradient: 'from-emerald-600 to-teal-500',
    },
    {
      title: 'Avg Settlement',
      value: '8.2s',
      label: 'Fastest in industry',
      icon: LineChart,
      gradient: 'from-purple-600 to-pink-500',
    },
    {
      title: 'UAE Share',
      value: '82%',
      progress: 82,
      icon: PieChart,
      gradient: 'from-amber-600 to-orange-500',
    },
  ];

  const corridors = [
    { route: 'INR→AED', share: 68 },
    { route: 'INR→USD', share: 22 },
    { route: 'AED→INR', share: 10 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fadeInUp space-y-2">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Analytics
        </h1>
        <p className="text-lg text-muted-foreground">Real-time business intelligence and performance metrics</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card
              key={metric.title}
              className="p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{metric.title}</h4>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${metric.gradient} text-white`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                  {metric.change && (
                    <div className="flex items-center gap-1 mt-2 text-emerald-600">
                      <ArrowUpRight className="w-4 h-4" />
                      <span className="text-sm font-semibold">{metric.change}</span>
                    </div>
                  )}
                  {metric.label && !metric.progress && <p className="text-xs text-muted-foreground mt-2">{metric.label}</p>}
                </div>

                {metric.progress && (
                  <div className="pt-2">
                    <Progress value={metric.progress} className="h-2" />
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenue Growth */}
        <Card className="p-8 border-0 shadow-lg overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <LineChart className="w-5 h-5" />
              </div>
              Revenue Growth
            </h3>
            <Badge className="bg-emerald-500/20 text-emerald-700 border border-emerald-200/50">+24% YoY</Badge>
          </div>
          <div className="relative h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-border/40 flex items-end justify-around p-6 gap-2">
            {[40, 65, 45, 75, 55, 80, 65].map((height, idx) => (
              <div
                key={idx}
                className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-lg opacity-70 hover:opacity-100 transition-opacity duration-300 group cursor-pointer"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </Card>

        {/* Volume by Corridor */}
        <Card className="p-8 border-0 shadow-lg overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <BarChart3 className="w-5 h-5" />
              </div>
              Volume by Corridor
            </h3>
            <Badge className="bg-blue-500/20 text-blue-700 border border-blue-200/50">Top 3</Badge>
          </div>
          <div className="space-y-6">
            {corridors.map((corridor, idx) => (
              <div key={idx} className="space-y-3 group">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{corridor.route}</span>
                  <span className={`text-sm font-bold bg-gradient-to-r ${idx === 0 ? 'from-primary to-accent' : 'from-muted-foreground to-muted'} bg-clip-text text-transparent`}>
                    {corridor.share}%
                  </span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      idx === 0
                        ? 'bg-gradient-to-r from-primary to-accent'
                        : idx === 1
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                        : 'bg-gradient-to-r from-slate-400 to-slate-500'
                    }`}
                    style={{ width: `${corridor.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

