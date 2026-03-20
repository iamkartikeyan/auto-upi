'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface SuccessPageProps {
  data: {
    amount: number;
    received: number;
    fee: number;
    hash: string;
    settlementTime: number;
    currency: string;
  };
  onViewDetails: () => void;
}

export default function SuccessPage({ data, onViewDetails }: SuccessPageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(data.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
      <Card className="w-full max-w-md shadow-xl border-0 overflow-hidden">
        <div className="bg-gradient-to-br from-green-50 via-blue-50 to-green-50 p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Transaction</h1>
            <p className="text-4xl font-bold text-green-600">Successful</p>
          </div>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="border-b border-border pb-4">
              <p className="text-muted-foreground text-sm mb-1">Amount Sent</p>
              <p className="text-3xl font-bold text-foreground">₹{data.amount.toLocaleString()}</p>
            </div>

            <div className="border-b border-border pb-4">
              <p className="text-muted-foreground text-sm mb-1">Amount Received</p>
              <p className="text-3xl font-bold text-primary">{data.received} {data.currency}</p>
            </div>

            <div className="border-b border-border pb-4">
              <p className="text-muted-foreground text-sm mb-1">Settlement Time</p>
              <p className="text-2xl font-bold text-blue-600">{data.settlementTime} seconds</p>
            </div>

            <div className="pt-4 space-y-3">
              <p className="text-muted-foreground text-xs">Transaction Hash</p>
              <div className="bg-slate-100 rounded p-3 flex items-center justify-between font-mono text-sm">
                <span className="text-slate-600 truncate">{data.hash}</span>
                <button
                  onClick={handleCopyHash}
                  className="ml-2 p-1 hover:bg-slate-200 rounded transition-colors"
                  title="Copy hash"
                >
                  <Copy className="w-4 h-4 text-slate-600" />
                </button>
              </div>
              {copied && <p className="text-xs text-green-600 text-center">Copied!</p>}
            </div>
          </div>

          <Button
            onClick={onViewDetails}
            className="w-full bg-gradient-to-r from-primary to-primary/90 text-white font-semibold py-6 rounded-lg hover:shadow-lg transition-all"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Transaction Details
          </Button>
        </div>
      </Card>
    </div>
  );
}
