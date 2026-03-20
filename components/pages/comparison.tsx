'use client';

import { Card } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

export default function ComparisonPage() {
  const comparisonData = [
    {
      metric: 'Settlement Time',
      traditional: '3–5 days',
      autoupi: '8 seconds',
      highlight: 'autoupi',
    },
    {
      metric: 'Transaction Fee',
      traditional: '₹500',
      autoupi: '₹50',
      highlight: 'autoupi',
    },
    {
      metric: 'Transparency',
      traditional: 'Low',
      autoupi: 'High',
      highlight: 'autoupi',
    },
    {
      metric: 'Exchange Rate Lock',
      traditional: 'No',
      autoupi: 'Yes',
      highlight: 'autoupi',
    },
    {
      metric: 'Real-time Updates',
      traditional: 'No',
      autoupi: 'Yes',
      highlight: 'autoupi',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Why AutoUPI?</h1>
        <p className="text-xl text-muted-foreground">See how we revolutionize cross-border payments</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Traditional Banking Card */}
        <Card className="p-8 border border-border hover:shadow-lg transition-shadow">
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-slate-200 text-slate-700 rounded-full text-sm font-semibold mb-3">
                Traditional Banking
              </div>
              <p className="text-sm text-muted-foreground">Slow, costly, and opaque</p>
            </div>

            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.metric}</p>
                    <p className="font-semibold text-slate-500">{item.traditional}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* AutoUPI Card */}
        <Card className="p-8 border-2 border-primary shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-blue-50 to-white">
          <div className="space-y-6">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full text-sm font-semibold mb-3">
                AutoUPI – Powered by AI
              </div>
              <p className="text-sm text-primary font-medium">Fast, fair, and transparent</p>
            </div>

            <div className="space-y-4">
              {comparisonData.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.metric}</p>
                    <p className="font-bold text-primary">{item.autoupi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Savings Highlight */}
      <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-4">
        <Card className="p-6 text-center space-y-2 border-0 bg-gradient-to-br from-green-50 to-green-100/50">
          <p className="text-sm text-muted-foreground">Cost Savings</p>
          <p className="text-3xl font-bold text-green-600">90%</p>
          <p className="text-xs text-muted-foreground">vs Traditional Banking</p>
        </Card>

        <Card className="p-6 text-center space-y-2 border-0 bg-gradient-to-br from-blue-50 to-blue-100/50">
          <p className="text-sm text-muted-foreground">Speed Improvement</p>
          <p className="text-3xl font-bold text-primary">22,500x</p>
          <p className="text-xs text-muted-foreground">Faster Settlement</p>
        </Card>

        <Card className="p-6 text-center space-y-2 border-0 bg-gradient-to-br from-amber-50 to-amber-100/50">
          <p className="text-sm text-muted-foreground">Transparency Score</p>
          <p className="text-3xl font-bold text-amber-600">100%</p>
          <p className="text-xs text-muted-foreground">Real-time Tracking</p>
        </Card>
      </div>
    </div>
  );
}
