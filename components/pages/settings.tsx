'use client';

import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Customize your AutoUPI experience</p>
      </div>

      <Card className="p-8 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-lg font-semibold">Email Alerts</Label>
                <p className="text-sm text-muted-foreground">Receive settlement confirmations and important updates</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-lg font-semibold">Push Notifications</Label>
                <p className="text-sm text-muted-foreground">Real-time transaction updates on mobile</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-lg font-semibold">SMS Alerts</Label>
                <p className="text-sm text-muted-foreground">High-value transaction notifications</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Settlement Preferences</h2>
          <div className="space-y-6">
            <div>
              <Label className="text-lg font-semibold mb-2 block">Auto-Settlement Threshold</Label>
              <p className="text-sm text-muted-foreground mb-4">Transactions above this amount will auto-settle</p>
              <Slider defaultValue={[10000]} max={100000} step={1000} className="w-full" />
              <div className="text-right text-sm font-mono">₹10,000</div>
            </div>
            <div>
              <Label className="text-lg font-semibold mb-2 block">Default Currency Pair</Label>
              <Select defaultValue="INR-AED">
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INR-AED">INR → AED</SelectItem>
                  <SelectItem value="INR-USD">INR → USD</SelectItem>
                  <SelectItem value="AED-INR">AED → INR</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Privacy & Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-lg font-semibold">Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">Enhanced account security</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label className="text-lg font-semibold">Transaction History Retention</Label>
                <p className="text-sm text-muted-foreground">Keep records for 2 years</p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </Card>

      <div className="flex gap-3 pt-6 border-t">
        <Button variant="outline" className="flex-1">Discard Changes</Button>
        <Button className="flex-1">Save Settings</Button>
      </div>
    </div>
  );
}
