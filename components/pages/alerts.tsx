'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Bell, CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const alerts = [
  {
    id: 1,
    type: 'liquidity' as const,
    title: 'Low INR Pool Balance',
    description: 'INR liquidity below threshold (₹15L remaining)',
    time: '2 min ago',
    severity: 'warning' as const,
    icon: AlertCircle,
    color: 'from-orange-600 to-red-500',
  },
  {
    id: 2,
    type: 'transaction' as const,
    title: 'High Value Settlement Complete',
    description: '₹12.5L transferred to merchant@uae.ae',
    time: '5 min ago',
    severity: 'success' as const,
    icon: CheckCircle2,
    color: 'from-emerald-600 to-teal-500',
  },
  {
    id: 3,
    type: 'kyc' as const,
    title: '3 KYC Verifications Pending',
    description: 'Review documents for new merchants',
    time: '1 hr ago',
    severity: 'info' as const,
    icon: Bell,
    color: 'from-blue-600 to-cyan-500',
  },
];

export default function AlertsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeInUp">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Alerts
          </h1>
          <p className="text-lg text-muted-foreground">Stay updated with real-time system notifications</p>
        </div>
        <Badge className="bg-red-500/20 text-red-700 border border-red-200/50 text-base px-4 py-2 font-bold">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mr-2"></div>
          2 New
        </Badge>
      </div>

      <div className="space-y-4 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        {alerts.map((alert, idx) => {
          const Icon = alert.icon;
          return (
            <Card
              key={alert.id}
              className="p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-[1.02] cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${alert.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="relative flex gap-5">
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${alert.color} text-white shadow-lg group-hover:shadow-xl transition-all`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-lg text-foreground">{alert.title}</h3>
                      <Badge
                        className={`text-xs font-semibold whitespace-nowrap ${
                          alert.severity === 'warning'
                            ? 'bg-orange-500/20 text-orange-700 border border-orange-200/50'
                            : alert.severity === 'success'
                            ? 'bg-emerald-500/20 text-emerald-700 border border-emerald-200/50'
                            : 'bg-blue-500/20 text-blue-700 border border-blue-200/50'
                        }`}
                      >
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-muted-foreground/20 transition-colors"
                      title="Dismiss"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{alert.description}</p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground font-medium">{alert.time}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-4 border-primary/30 hover:bg-primary/5 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 mr-2" />
                      Resolve
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Empty State Info */}
      <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-center gap-4">
          <div className="p-4 rounded-lg bg-primary/10 text-primary">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Smart Alerts</p>
            <p className="text-sm text-muted-foreground">Get notified about liquidity, transactions, KYC, and system health in real-time</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

