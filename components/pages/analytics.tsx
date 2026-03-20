'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Business intelligence and performance metrics</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>Daily Transactions</div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">1,247</div>
          <div className="text-2xl text-primary font-semibold">+12.5%</div>
          <div className="text-xs text-muted-foreground">vs yesterday</div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-green-500/10 text-green-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>Conversion Rate</div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">4.8%</div>
          <Progress value={48} className="h-2 mt-2 [&>div]:bg-green-500" />
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600">
              <LineChart className="w-5 h-5" />
            </div>
            <div>Avg Settlement</div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">8.2s</div>
          <Badge className="mt-2">Fastest in industry</Badge>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-orange-500/10 text-orange-600">
              <PieChart className="w-5 h-5" />
            </div>
            <div>UAE Share</div>
          </div>
          <div className="text-3xl font-bold text-foreground mb-1">82%</div>
          <Progress value={82} className="h-2 mt-2 [&>div]:bg-orange-500" />
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <LineChart className="w-5 h-5" />
            Revenue Growth
          </h3>
          <div className="h-64 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl animate-pulse"></div>
        </Card>

        <Card className="p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Volume by Corridor
          </h3>
          <div className="grid grid-cols-2 gap-4 h-64">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>INR→AED</span>
                <span className="font-bold">68%</span>
              </div>
              <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[68%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>INR→USD</span>
                <span className="font-bold">22%</span>
              </div>
              <div className="h-2 bg-secondary/20 rounded-full overflow-hidden">
                <div className="h-full bg-secondary rounded-full w-[22%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>AED→INR</span>
                <span className="font-bold">10%</span>
              </div>
              <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                <div className="h-full bg-muted rounded-full w-[10%]"></div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

