'use client';

import * as React from 'react';
import { Settings, Users, BarChart3, Bell, Landmark, CreditCard, Home } from 'lucide-react';
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuBadge } from '@/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type PageType = 'dashboard' | 'transactions' | 'liquidity' | 'users' | 'analytics' | 'alerts' | 'settings';

interface NavigationSidebarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function NavigationSidebar({ currentPage, onNavigate }: NavigationSidebarProps) {
  const navItems = [
    { id: 'dashboard' as PageType, label: 'Dashboard', icon: Home, color: 'from-blue-600 to-cyan-500' },
    { id: 'transactions' as PageType, label: 'Transactions', icon: CreditCard, color: 'from-purple-600 to-pink-500' },
    { id: 'liquidity' as PageType, label: 'Liquidity Pools', icon: Landmark, color: 'from-emerald-600 to-teal-500' },
    { id: 'users' as PageType, label: 'Users', icon: Users, color: 'from-orange-600 to-red-500' },
    { id: 'analytics' as PageType, label: 'Analytics', icon: BarChart3, color: 'from-indigo-600 to-blue-500' },
    { id: 'alerts' as PageType, label: 'Alerts', icon: Bell, badge: 2, color: 'from-red-600 to-pink-500' },
    { id: 'settings' as PageType, label: 'Settings', icon: Settings, color: 'from-slate-600 to-slate-500' },
  ] as const;

  return (
    <div className="flex h-full w-full flex-col">
      <SidebarContent>
        <SidebarGroup className="py-6">
          <SidebarGroupLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60 px-2">
            AutoUPI
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton
                        onClick={() => onNavigate(item.id)}
                        isActive={currentPage === item.id}
                        className="relative group hover:scale-105 transition-transform duration-200"
                      >
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${(item as any).color} text-white group-hover:shadow-lg transition-all ${
                            currentPage === item.id ? 'shadow-lg scale-105' : ''
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className={`transition-colors ${currentPage === item.id ? 'font-semibold text-foreground' : ''}`}>
                          {item.label}
                        </span>
                        {(item as any).badge && (
                          <SidebarMenuBadge className="bg-red-500 text-white animate-pulse">
                            {(item as any).badge}
                          </SidebarMenuBadge>
                        )}
                        {currentPage === item.id && (
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-r-full"></div>
                        )}
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="font-semibold">
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </div>
  );
}
