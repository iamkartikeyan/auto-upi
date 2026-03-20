'use client';

import { Button } from '@/components/ui/button';

type PageType = 'send' | 'processing' | 'success' | 'comparison' | 'dashboard';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const isActive = (page: PageType) => currentPage === page;

  return (
    <nav className="border-b border-border bg-white/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl text-foreground">AutoUPI</span>
          </div>
          
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant={isActive('send') ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate('send')}
              className="text-xs"
            >
              Send Money
            </Button>
            <Button
              variant={isActive('comparison') ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate('comparison')}
              className="text-xs"
            >
              Compare
            </Button>
            <Button
              variant={isActive('dashboard') ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onNavigate('dashboard')}
              className="text-xs"
            >
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
