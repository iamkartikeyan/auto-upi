'use client';

import * as React from 'react';
import { Settings, Users, BarChart3, Bell, Landmark, CreditCard, Activity, Home } from 'lucide-react';
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuBadge } from '@/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type PageType = 'dashboard' | 'transactions' | 'liquidity' | 'users' | 'analytics' | 'alerts' | 'settings';

interface NavigationSidebarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function NavigationSidebar({ currentPage, onNavigate }: NavigationSidebarProps) {
  const navItems = [
    { id: 'dashboard' as PageType, label: 'Dashboard', icon: Home },
    { id: 'transactions' as PageType, label: 'Transactions', icon: CreditCard },
    { id: 'liquidity' as PageType, label: 'Liquidity Pools', icon: Landmark },
    { id: 'users' as PageType, label: 'Users', icon: Users },
    { id: 'analytics' as PageType, label: 'Analytics', icon: BarChart3 },
    { id: 'alerts' as PageType, label: 'Alerts', icon: Bell, badge: 2 },
    { id: 'settings' as PageType, label: 'Settings', icon: Settings },
  ] as const;

  return (
    <div className="flex h-full w-full flex-col">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton
                        onClick={() => onNavigate(item.id)}
                        isActive={currentPage === item.id}
                      >
                        <item.icon />
                        <span>{item.label}</span>
                        {(item as any).badge && <SidebarMenuBadge>{(item as any).badge}</SidebarMenuBadge>}
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
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
