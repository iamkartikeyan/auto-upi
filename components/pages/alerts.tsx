'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertCircle, Bell, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const alerts = [
  {
    id: 1,
    type: 'liquidity' as const,
    title: 'Low INR Pool Balance',
    description: 'INR liquidity below threshold (₹15L remaining)',
    time: '2 min ago',
    severity: 'warning' as const,
  },
  {
    id: 2,
    type: 'transaction' as const,
    title: 'High Value Settlement Complete',
    description: '₹12.5L transferred to merchant@uae.ae',
    time: '5 min ago',
    severity: 'success' as const,
  },
  {
    id: 3,
    type: 'kyc' as const,
    title: '3 KYC Verifications Pending',
    description: 'Review documents for new merchants',
    time: '1 hr ago',
    severity: 'info' as const,
  },
];

export default function AlertsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Alerts</h1>
          <p className="text-muted-foreground">Stay updated with system notifications</p>
        </div>
        <Badge variant="destructive" className="text-lg px-4 py-2 font-bold">2 New</Badge>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex gap-4">
              <div className={`p-3 rounded-xl flex-shrink-0 ${
                alert.severity === 'warning' ? 'bg-orange-500/10 text-orange-600 border-orange-500/20 border' :
                alert.severity === 'success' ? 'bg-green-500/10 text-green-600 border-green-500/20 border' :
                'bg-blue-500/10 text-blue-600 border-blue-500/20 border'
              }`}>
                {alert.type === 'liquidity' && <AlertCircle className="w-5 h-5" />}
                {alert.type === 'transaction' && <Bell className="w-5 h-5" />}
                {alert.type === 'kyc' && <Bell className="w-5 h-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-lg truncate">{alert.title}</h3>
                  <Badge variant={alert.severity === 'warning' ? 'destructive' : 'secondary'}>{alert.severity.toUpperCase()}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{alert.time}</span>
                  <Button variant="ghost" size="sm" className="h-6 px-3">
                    Resolve
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

