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
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex">
      <SidebarProvider>
        <Sidebar>
          <NavigationSidebar currentPage={currentPage} onNavigate={setCurrentPage} />
        </Sidebar>
        <SidebarInset>
          <div className="w-full">
            <div className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-10">
              <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">AutoUPI</h2>
                  <p className="text-xs text-muted-foreground/70 mt-0.5">Settlement Layer</p>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-6 py-8 pb-16">
              {currentPage === 'dashboard' && <DashboardPage />}
              {currentPage === 'transactions' && <TransactionsPage />}
              {currentPage === 'liquidity' && <LiquidityPoolsPage />}
              {currentPage === 'users' && <UsersPage />}
              {currentPage === 'analytics' && <AnalyticsPage />}
              {currentPage === 'alerts' && <AlertsPage />}
              {currentPage === 'settings' && <SettingsPage />}
              {currentPage === 'comparison' && <div className="animate-fadeInUp text-center py-12">Comparison Page</div>}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
