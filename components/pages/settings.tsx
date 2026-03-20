'use client';

import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Bell, Lock, Zap, Settings as SettingsIcon } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="animate-fadeInUp space-y-2">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Settings
        </h1>
        <p className="text-lg text-muted-foreground">Customize your AutoUPI experience and preferences</p>
      </div>

      {/* Notifications Section */}
      <Card className="p-8 border-0 shadow-lg overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-lg bg-blue-500/10 text-blue-600">
            <Bell className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
            <p className="text-sm text-muted-foreground">Manage how you receive updates</p>
          </div>
        </div>

        <div className="space-y-5">
          {[
            {
              title: 'Email Alerts',
              description: 'Receive settlement confirmations and important updates',
              defaultChecked: true,
            },
            {
              title: 'Push Notifications',
              description: 'Real-time transaction updates on mobile',
              defaultChecked: false,
            },
            {
              title: 'SMS Alerts',
              description: 'High-value transaction notifications',
              defaultChecked: true,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 border border-border/40"
            >
              <div>
                <Label className="text-base font-semibold cursor-pointer">{item.title}</Label>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} />
            </div>
          ))}
        </div>
      </Card>

      {/* Settlement Preferences Section */}
      <Card className="p-8 border-0 shadow-lg overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-lg bg-primary/10 text-primary">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Settlement Preferences</h2>
            <p className="text-sm text-muted-foreground">Configure automatic settlement rules</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Auto-Settlement Threshold */}
          <div className="space-y-4 p-5 rounded-lg bg-muted/30 border border-border/40">
            <div>
              <Label className="text-base font-semibold">Auto-Settlement Threshold</Label>
              <p className="text-sm text-muted-foreground mt-2">Transactions above this amount will auto-settle automatically</p>
            </div>
            <div className="space-y-4">
              <Slider defaultValue={[10000]} max={100000} step={1000} className="w-full" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Amount:</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  ₹10,000
                </span>
              </div>
            </div>
          </div>

          {/* Default Currency Pair */}
          <div className="space-y-3 p-5 rounded-lg bg-muted/30 border border-border/40">
            <Label className="text-base font-semibold">Default Currency Pair</Label>
            <Select defaultValue="INR-AED">
              <SelectTrigger className="w-full focus:ring-2 focus:ring-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="INR-AED">₹ INR → AED</SelectItem>
                <SelectItem value="INR-USD">₹ INR → USD</SelectItem>
                <SelectItem value="AED-INR">AED → ₹ INR</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      {/* Privacy & Security Section */}
      <Card className="p-8 border-0 shadow-lg overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 rounded-lg bg-emerald-500/10 text-emerald-600">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Privacy & Security</h2>
            <p className="text-sm text-muted-foreground">Protect your account and data</p>
          </div>
        </div>

        <div className="space-y-5">
          {[
            {
              title: 'Two-Factor Authentication',
              description: 'Enhanced account security with 2FA',
              defaultChecked: true,
              badge: 'Recommended',
            },
            {
              title: 'Transaction History Retention',
              description: 'Keep records for 2 years for compliance',
              defaultChecked: true,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200 border border-border/40"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <Label className="text-base font-semibold cursor-pointer">{item.title}</Label>
                  {item.badge && (
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-700 font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} />
            </div>
          ))}
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-8 border-t border-border/40 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
        <Button
          variant="outline"
          className="flex-1 h-12 border-primary/30 hover:bg-muted text-base font-semibold transition-all duration-200"
        >
          Discard Changes
        </Button>
        <Button className="flex-1 h-12 bg-gradient-to-r from-primary to-accent text-white text-base font-semibold hover:shadow-lg transition-all duration-200">
          <SettingsIcon className="w-4 h-4 mr-2" />
          Save Settings
        </Button>
      </div>
    </div>
  );
}
