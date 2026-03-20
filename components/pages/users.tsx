'use client';

import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users as UsersIcon, UserCheck, UserX } from 'lucide-react';

export default function UsersPage() {
  const users = [
    {
      name: 'Ahmed Al-Mansoori',
      email: 'ahmed@uae.ae',
      country: 'UAE',
      transactions: 124,
      status: 'active' as const,
    },
    {
      name: 'Fatima Khan',
      email: 'fatima@merchant.ae',
      country: 'UAE',
      transactions: 89,
      status: 'active' as const,
    },
    // more...
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Users</h1>
        <p className="text-muted-foreground">Manage your user base and KYC status</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 text-center">
          <UsersIcon className="w-12 h-12 text-primary mx-auto mb-4" />
          <div className="text-3xl font-bold text-foreground">2,847</div>
          <p className="text-muted-foreground">Total Users</p>
        </Card>
        <Card className="p-6 text-center">
          <UserCheck className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <div className="text-3xl font-bold text-green-600">2,645</div>
          <p className="text-muted-foreground">Verified</p>
        </Card>
        <Card className="p-6 text-center">
          <UserX className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <div className="text-3xl font-bold text-orange-600">202</div>
          <p className="text-muted-foreground">Pending KYC</p>
        </Card>
        <Card className="p-6 text-center">
          <UsersIcon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <div className="text-3xl font-bold text-primary">145</div>
          <p className="text-muted-foreground">24h New</p>
        </Card>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Transactions</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">UAE</Badge>
                </TableCell>
                <TableCell className="font-mono">{user.transactions}</TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                    {user.status.toUpperCase()}
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

