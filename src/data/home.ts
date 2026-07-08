import { Building2, Drill, Hammer, Paintbrush, ShieldCheck, Sparkles, Waves } from 'lucide-react';
import type { ComponentType } from 'react';

type IconType = ComponentType<{ className?: string }>;

export const statItems = [
  '20+ Service Categories',
  '50 KM Match Radius',
  '100% KYC Verified',
  'Secure Escrow Payments',
  'Zero Hidden Charges',
];

export const categoryItems: { label: string; icon: IconType }[] = [
  { label: 'Painter', icon: Paintbrush },
  { label: 'Plumber', icon: Waves },
  { label: 'Electrician', icon: Sparkles },
  { label: 'Carpenter', icon: Hammer },
  { label: 'Home Cleaner', icon: ShieldCheck },
  { label: 'Gardener', icon: Building2 },
  { label: 'AC Repair', icon: Drill },
  { label: 'And More', icon: Sparkles },
];

export const featureItems = [
  'Smart location matching',
  'Verified professionals only',
  'Budget control',
  'Secure escrow payment',
  'Real-time work tracking',
  'Dispute protection',
];

