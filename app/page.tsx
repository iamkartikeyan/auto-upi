'use client';

import { useState } from 'react';
import DashboardPage from '@/components/pages/dashboard';
import TransactionsPage from '@/components/pages/transactions';
import LiquidityPoolsPage from '@/components/pages/liquidity-pools';
import UsersPage from '@/components/pages/users';
import AnalyticsPage from '@/components/pages/analytics';
import AlertsPage from '@/components/pages/alerts';
import SettingsPage from '@/components/pages/settings';
import NavigationSidebar from '@/components/navigation-sidebar';
import { SidebarInset, SidebarProvider, Sidebar } from '@/components/ui/sidebar';

type PageType = 'dashboard' | 'transactions' | 'liquidity' | 'users' | 'analytics' | 'alerts' | 'settings' | 'comparison';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');


  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50 flex">
      <SidebarProvider>
        <Sidebar>
          <NavigationSidebar currentPage={currentPage} onNavigate={setCurrentPage} />
        </Sidebar>
        <SidebarInset>
          <div className="container mx-auto px-4 py-12">
            {currentPage === 'dashboard' && <DashboardPage />}
            {currentPage === 'transactions' && <TransactionsPage />}
            {currentPage === 'liquidity' && <LiquidityPoolsPage />}
            {currentPage === 'users' && <UsersPage />}
            {currentPage === 'analytics' && <AnalyticsPage />}
            {currentPage === 'alerts' && <AlertsPage />}
            {currentPage === 'settings' && <SettingsPage />}
            {currentPage === 'comparison' && <div>Comparison (old)</div>}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
