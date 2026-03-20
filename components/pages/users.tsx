'use client';

import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Users as UsersIcon, UserCheck, UserX, TrendingUp } from 'lucide-react';

export default function UsersPage() {
  const stats = [
    {
      label: 'Total Users',
      value: '2,847',
      icon: UsersIcon,
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      label: 'Verified',
      value: '2,645',
      icon: UserCheck,
      gradient: 'from-emerald-600 to-teal-500',
      percentage: '93%',
    },
    {
      label: 'Pending KYC',
      value: '202',
      icon: UserX,
      gradient: 'from-amber-600 to-orange-500',
      percentage: '7%',
    },
    {
      label: '24h New',
      value: '145',
      icon: TrendingUp,
      gradient: 'from-purple-600 to-pink-500',
      trend: '+12%',
    },
  ];

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
    {
      name: 'Mohammed Hassan',
      email: 'hassan@business.ae',
      country: 'UAE',
      transactions: 156,
      status: 'active' as const,
    },
    {
      name: 'Layla Al-Mazrouei',
      email: 'layla@trading.ae',
      country: 'UAE',
      transactions: 67,
      status: 'active' as const,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fadeInUp space-y-2">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Users
        </h1>
        <p className="text-lg text-muted-foreground">Manage your user base and KYC verification status</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="p-6 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.gradient} text-white`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                {stat.percentage && <p className="text-xs text-muted-foreground">{stat.percentage} of total</p>}
                {stat.trend && <p className="text-xs text-emerald-600 font-semibold">{stat.trend} from yesterday</p>}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Users Table */}
      <Card className="overflow-hidden border-0 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border/40 px-6 py-4">
          <h3 className="text-lg font-semibold text-foreground">Active Users</h3>
        </div>
        <Table>
          <TableHeader className="border-b border-border/40">
            <TableRow className="hover:bg-transparent">
              <TableHead className="text-foreground font-semibold">Name</TableHead>
              <TableHead className="text-foreground font-semibold">Email</TableHead>
              <TableHead className="text-foreground font-semibold">Country</TableHead>
              <TableHead className="text-foreground font-semibold">Transactions</TableHead>
              <TableHead className="text-foreground font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow
                key={index}
                className="hover:bg-primary/5 transition-colors duration-200 border-b border-border/20 animate-fadeInUp"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <TableCell className="font-semibold text-foreground">{user.name}</TableCell>
                <TableCell className="text-sm text-muted-foreground">{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="bg-primary/5 border-primary/30">
                    {user.country}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono font-semibold text-foreground">{user.transactions}</TableCell>
                <TableCell>
                  <Badge className="bg-emerald-500/20 text-emerald-700 border border-emerald-200/50 hover:bg-emerald-500/30">
                    <div className="w-2 h-2 rounded-full bg-emerald-600 mr-2"></div>
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

