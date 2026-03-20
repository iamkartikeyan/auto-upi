'use client';

import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight, CheckCircle, ClockLoader } from 'lucide-react';

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
  // add more...
];

type Status = 'completed' | 'processing' | 'failed';

export default function TransactionsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Transactions</h1>
        <p className="text-muted-foreground">All your settlement history</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="text-3xl font-bold text-primary">154</div>
          <p className="text-sm text-muted-foreground">Total Transactions</p>
        </Card>
        <Card className="p-6">
          <div className="text-3xl font-bold text-green-600">₹8.2 Cr</div>
          <p className="text-sm text-muted-foreground">24h Volume</p>
        </Card>
        <Card className="p-6">
          <div className="text-3xl font-bold text-blue-600">98.7%</div>
          <p className="text-sm text-muted-foreground">Success Rate</p>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow key={txn.id}>
                <TableCell className="font-mono text-sm">{txn.id}</TableCell>
                <TableCell className="text-sm">{txn.date}</TableCell>
                <TableCell className="font-bold"> {txn.amount}</TableCell>
                <TableCell className="font-medium">{txn.to}</TableCell>
                <TableCell>
                  <Badge variant={txn.status === 'completed' ? 'default' : 'secondary'}>
                    {txn.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                    {txn.status === 'processing' && <ClockLoader className="w-3 h-3 mr-1 animate-spin" />}
                    {txn.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}

