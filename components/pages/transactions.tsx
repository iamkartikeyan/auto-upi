'use client';

import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertCircle, TrendingUp, DollarSign, Zap, Clock } from 'lucide-react';

const transactions = [
  {
    id: '#TXN001',
    date: '2024-10-05 14:32',
    amount: '₹25,000',
    to: 'user@uae.com',
    status: 'completed' as const,
    currency: 'AED',
    received: '1,125 AED',
  },
  {
    id: '#TXN002',
    date: '2024-10-05 13:15',
    amount: '₹10,500',
    to: 'merchant@uae.ae',
    status: 'processing' as const,
    currency: 'AED',
    received: '472 AED',
  },
  {
    id: '#TXN003',
    date: '2024-10-05 12:45',
    amount: '₹5,200',
    to: 'receiver@uae.ae',
    status: 'completed' as const,
    currency: 'AED',
    received: '234 AED',
  },
  {
    id: '#TXN004',
    date: '2024-10-05 11:30',
    amount: '₹15,000',
    to: 'partner@uae.com',
    status: 'completed' as const,
    currency: 'AED',
    received: '675 AED',
  },
];

type Status = 'completed' | 'processing' | 'failed';

export default function TransactionsPage() {
  const stats = [
    {
      label: 'Total Transactions',
      value: '154',
      icon: TrendingUp,
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      label: '24h Volume',
      value: '₹8.2 Cr',
      icon: DollarSign,
      gradient: 'from-emerald-600 to-teal-500',
    },
    {
      label: 'Success Rate',
      value: '98.7%',
      icon: CheckCircle,
      gradient: 'from-purple-600 to-pink-500',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fadeInUp space-y-2">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Transactions
        </h1>
        <p className="text-lg text-muted-foreground">Real-time settlement history and analytics</p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} text-white`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Transactions Table */}
      <Card className="overflow-hidden border-0 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/40 px-6 py-4">
          <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
        </div>
        <Table>
          <TableHeader className="border-b border-border/40">
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-foreground font-semibold">ID</TableHead>
              <TableHead className="text-foreground font-semibold">Date</TableHead>
              <TableHead className="text-foreground font-semibold">Amount</TableHead>
              <TableHead className="text-foreground font-semibold">To</TableHead>
              <TableHead className="text-foreground font-semibold">Received</TableHead>
              <TableHead className="text-foreground font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((txn, idx) => (
              <TableRow
                key={txn.id}
                className="hover:bg-primary/5 transition-colors duration-200 border-b border-border/20 animate-fadeInUp"
                style={{ animationDelay: `${0.2 + idx * 0.05}s` }}
              >
                <TableCell className="font-mono text-sm font-semibold text-primary">{txn.id}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{txn.date}</TableCell>
                <TableCell className="font-bold text-foreground">{txn.amount}</TableCell>
                <TableCell className="font-medium text-foreground text-sm">{txn.to}</TableCell>
                <TableCell className="font-semibold text-emerald-600">{txn.received}</TableCell>
                <TableCell>
                  {txn.status === 'completed' && (
                    <Badge className="bg-emerald-500/20 text-emerald-700 border border-emerald-200/50 hover:bg-emerald-500/30">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                  {txn.status === 'processing' && (
                    <Badge className="bg-amber-500/20 text-amber-700 border border-amber-200/50 hover:bg-amber-500/30">
                      <Clock className="w-3 h-3 mr-1 animate-spin" />
                      Processing
                    </Badge>
                  )}
                  {txn.status === 'failed' && (
                    <Badge className="bg-red-500/20 text-red-700 border border-red-200/50 hover:bg-red-500/30">
                      <AlertCircle className="w-3 h-3 mr-1" />
                      Failed
                    </Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

