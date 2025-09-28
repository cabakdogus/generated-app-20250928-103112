import { LucideIcon } from "lucide-react";
export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
};
export type MetricCardData = {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: LucideIcon;
};
