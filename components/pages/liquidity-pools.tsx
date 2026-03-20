'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, DollarSign } from 'lucide-react';

export default function LiquidityPoolsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Liquidity Pools</h1>
        <p className="text-muted-foreground">Manage and monitor your liquidity pools</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xl">INR Pool</h3>
              <Badge variant="secondary">Primary</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-bold text-foreground">₹2.5 Cr</div>
            <p className="text-2xl text-muted-foreground">Available</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Utilization</span>
                <span className="font-semibold">68%</span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{width: '68%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-muted-foreground">24h Volume</span><div>₹8.2 Cr</div></div>
              <div><span className="text-muted-foreground">Active Routes</span><div>45</div></div>
            </div>
          </div>
        </Card>

        <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xl">AED Pool</h3>
              <Badge>Secondary</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-bold text-foreground">AED 1.4M</div>
            <p className="text-2xl text-muted-foreground">Available</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Utilization</span>
                <span className="font-semibold">55%</span>
              </div>
              <div className="h-2 bg-border rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{width: '55%'}}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-muted-foreground">24h Volume</span><div>AED 760K</div></div>
              <div><span className="text-muted-foreground">Active Routes</span><div>38</div></div>
            </div>
          </div>
        </Card>

        <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-xl">Performance</h3>
              <Badge variant="outline">Live</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-3xl font-bold text-foreground">1.8x</div>
            <p className="text-xl text-muted-foreground">Liquidity Ratio</p>
            <div className="text-sm space-y-1">
              <div>Settlement Speed: <span className="font-bold text-green-600">10s avg</span></div>
              <div>Success Rate: <span className="font-bold text-green-600">99.2%</span></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

