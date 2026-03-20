'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Lock } from 'lucide-react';

interface SendMoneyPageProps {
  onSend: (amount: number, recipientId: string) => void;
}

export default function SendMoneyPage({ onSend }: SendMoneyPageProps) {
  const [amount, setAmount] = useState('10000');
  const [recipientId, setRecipientId] = useState('recipient@uae');

  const numAmount = parseFloat(amount) || 0;
  const received = Math.round(numAmount * 0.045 * 100) / 100;
  const fee = Math.round(numAmount * 0.005);

  const handleSend = () => {
    if (numAmount > 0 && recipientId.trim()) {
      onSend(numAmount, recipientId);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
      <Card className="w-full max-w-md shadow-lg border-0">
        <div className="p-8 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Send Money</h1>
            <p className="text-muted-foreground">Internationally</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Amount (INR)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground font-semibold">₹</span>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8 text-lg font-semibold"
                  placeholder="10,000"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Recipient ID</label>
              <Input
                type="text"
                value={recipientId}
                onChange={(e) => setRecipientId(e.target.value)}
                className="text-lg"
                placeholder="recipient@uae"
              />
            </div>

            <div className="bg-blue-50 rounded-lg p-4 space-y-3 border border-blue-100">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Recipient gets</span>
                <span className="text-2xl font-bold text-primary">{received} AED</span>
              </div>
              <div className="border-t border-blue-100 pt-3 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Exchange Rate</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-foreground">1 INR = 0.045 AED</span>
                    <Lock className="w-3 h-3 text-primary" />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Fee</span>
                  <span className="font-medium text-foreground">₹{fee} (0.5%)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-foreground">KYC Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Secure</span>
              </div>
            </div>

            <Button
              onClick={handleSend}
              className="w-full bg-gradient-to-r from-primary to-primary/90 text-white font-semibold py-6 text-lg rounded-lg hover:shadow-lg transition-shadow"
              disabled={numAmount <= 0 || !recipientId.trim()}
            >
              Send Money
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
