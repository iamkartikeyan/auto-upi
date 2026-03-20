'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Lock, Send, ArrowRight } from 'lucide-react';

interface SendMoneyPageProps {
  onSend: (amount: number, recipientId: string) => void;
}

export default function SendMoneyPage({ onSend }: SendMoneyPageProps) {
  const [amount, setAmount] = useState('10000');
  const [recipientId, setRecipientId] = useState('recipient@uae');
  const [isLoading, setIsLoading] = useState(false);

  const numAmount = parseFloat(amount) || 0;
  const received = Math.round(numAmount * 0.045 * 100) / 100;
  const fee = Math.round(numAmount * 0.005);

  const handleSend = () => {
    if (numAmount > 0 && recipientId.trim()) {
      setIsLoading(true);
      setTimeout(() => {
        onSend(numAmount, recipientId);
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-lg shadow-2xl border-0 overflow-hidden">
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 p-8 sm:p-10 space-y-8 animate-fadeInUp">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Send Money
                </h1>
                <p className="text-sm text-muted-foreground">International transfer</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3 animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
              <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Amount (INR)</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground font-semibold text-lg group-focus-within:text-primary transition-colors">
                  ₹
                </span>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8 text-lg font-semibold focus:ring-2 focus:ring-primary focus:border-0"
                  placeholder="10,000"
                />
              </div>
            </div>

            <div className="space-y-3 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
              <label className="text-sm font-semibold text-foreground uppercase tracking-wide">Recipient ID</label>
              <Input
                type="text"
                value={recipientId}
                onChange={(e) => setRecipientId(e.target.value)}
                className="text-lg focus:ring-2 focus:ring-primary focus:border-0"
                placeholder="recipient@uae"
              />
            </div>

            {/* Exchange Preview */}
            <div
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-5 space-y-4 border border-primary/20 hover:border-primary/40 transition-colors animate-slideInLeft"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">You Send</p>
                <p className="text-xl font-bold text-foreground">₹{numAmount.toLocaleString('en-IN')}</p>
              </div>

              <div className="flex items-center justify-center py-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">Recipient Gets</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {received.toLocaleString('en-AE')} AED
                </p>
              </div>

              <div className="border-t border-primary/20 pt-4 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Exchange Rate</span>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">1 INR = 0.045 AED</span>
                    <div className="p-1 rounded-lg bg-primary/10 text-primary">
                      <Lock className="w-3 h-3" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Fee</span>
                  <span className="font-semibold text-foreground">₹{fee} (0.5%)</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-3 flex-wrap animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-200/50">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">KYC Verified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/30">
                <Lock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Encrypted</span>
              </div>
            </div>

            {/* Send Button */}
            <Button
              onClick={handleSend}
              disabled={numAmount <= 0 || !recipientId.trim() || isLoading}
              className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-2xl hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed animate-slideInLeft"
              style={{ animationDelay: '0.5s' }}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Send Money</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
