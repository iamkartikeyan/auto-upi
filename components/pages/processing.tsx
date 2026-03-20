'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Loader } from 'lucide-react';

interface ProcessingPageProps {
  data: {
    amount: number;
    recipientId: string;
    received: number;
    fee: number;
  };
  onComplete: () => void;
}

const steps = [
  { id: 1, label: 'KYC Verification', log: '[INFO] KYC verification passed' },
  { id: 2, label: 'AML Check', log: '[INFO] AML compliance check passed' },
  { id: 3, label: 'Exchange Rate Locked', log: '[INFO] Rate locked at 0.045 AED/INR' },
  { id: 4, label: 'Liquidity Check', log: '[INFO] Liquidity confirmed' },
  { id: 5, label: 'Initiating Settlement', log: '[INFO] Smart settlement triggered' },
];

export default function ProcessingPage({ data, onComplete }: ProcessingPageProps) {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    setCompletedSteps([]);
    setLogs([]);

    let currentStep = 0;
    let completionTimeout: ReturnType<typeof setTimeout> | undefined;

    const interval = setInterval(() => {
      const step = steps[currentStep];

      if (step) {
        setCompletedSteps(prev => [...prev, step.id]);
        setLogs(prev => [...prev, step.log]);
        currentStep++;
      } else {
        clearInterval(interval);
        completionTimeout = setTimeout(onComplete, 500);
      }
    }, 800);

    return () => {
      clearInterval(interval);
      if (completionTimeout) {
        clearTimeout(completionTimeout);
      }
    };
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
      <div className="w-full max-w-2xl grid md:grid-cols-2 gap-6">
        {/* Steps Card */}
        <Card className="p-8 shadow-lg border-0 md:col-span-1">
          <h2 className="text-2xl font-bold text-foreground mb-6">Processing Transaction</h2>
          <div className="space-y-4">
            {steps.map((step, index) => {
              const isCompleted = completedSteps.includes(step.id);
              const isActive = !isCompleted && index <= completedSteps.length;

              return (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-green-500 animate-bounce" />
                    ) : isActive ? (
                      <Loader className="w-6 h-6 text-primary animate-spin" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-muted bg-transparent" />
                    )}
                  </div>
                  <div>
                    <p className={`font-medium ${isCompleted ? 'text-green-600' : isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                      {step.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Logs Card */}
        <Card className="p-6 shadow-lg border-0 md:col-span-1 bg-slate-950">
          <h3 className="text-lg font-bold text-white mb-4">System Logs</h3>
          <div className="bg-slate-900 rounded p-4 h-48 overflow-y-auto font-mono text-sm text-green-400 space-y-1">
            {logs.length === 0 ? (
              <p className="text-slate-500">Waiting for logs...</p>
            ) : (
              logs.map((log, index) => (
                <div key={index}>{log}</div>
              ))
            )}
          </div>
        </Card>

        {/* Transaction Summary */}
        <Card className="p-6 shadow-lg md:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
          <h3 className="text-lg font-bold text-foreground mb-4">Transaction Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Amount Sending</span>
              <span className="font-semibold text-foreground">₹{data.amount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Recipient</span>
              <span className="font-semibold text-foreground">{data.recipientId}</span>
            </div>
            <div className="border-t border-blue-200 pt-3 flex justify-between">
              <span className="text-muted-foreground">Will Receive</span>
              <span className="font-bold text-primary text-lg">{data.received} AED</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
